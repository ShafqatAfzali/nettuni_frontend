import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'

import "../styles/search.css"

import Navbar from './parts/navbar'
import Loading from "./parts/loading"
import { flushSync } from 'react-dom'

export default function Search(){
    const [data,setdata]=useState([])
    const [loading, setloading]=useState(true)
    const [search,setsearch] = useState("")
    const [price_disp,setprice_disp]=useState(false)
    const [rating_disp,setrating_disp]=useState(false)
    const [sort_select, setsort_select]=useState();
    const [topic_select, settopic_select]=useState();
    const [min_price, setmin_price]=useState();
    const [max_price, setmax_price]=useState();
    const [min_rating, setmin_rating]=useState();
    const [max_rating, setmax_rating]=useState();
    const [priceF, setpriceF]=useState(true);
    const [ratingF, setratingF]=useState(true);
    const [original_data, setoriginal_data]=useState()


    const location = useLocation();
    const search_params=new URLSearchParams(location.search)
    const search_query=search_params.get("q")
    const page_query=search_params.get("p")
    const topic_query=search_params.get("topic")
    const min_R_query=search_params.get("min_R")
    const max_R_query=search_params.get("max_R")
    const min_P_query=search_params.get("min_P")
    const max_P_query=search_params.get("min_P")
    const [searchParams, setsearchParams]=useSearchParams()
    const navigate = useNavigate();

    function redirect_course(id){
        navigate(`/course/${id}`)
    }

    async function search_course(){
        setsearchParams({q:search, p:1, topic:topic_query})
        setloading(true)
        async function getsearchdt(){
            const resp = await fetch(`api/search?q=${search}&p=${page_query}&topic=${topic_query}`,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const dt = await resp.json()
            setdata(dt)
        }

        getsearchdt().then(()=>{setloading(false)});
    }

    function keydown_search(event){
        if(event.key==="Enter"){
            setsearchParams({q:search, p:1, topic:topic_query})
            setloading(true)
            async function getsearchdt(){
                const resp = await fetch(`api/search?q=${search}&p=${page_query}&topic=${topic_query}`,{
                    method:"GET",
                    headers:{
                        "Accept":"application/json"
                    }
                })
                const dt = await resp.json()
                setdata(dt)
            }
    
            getsearchdt().then(()=>{setloading(false)});
        }
    }

    useEffect(()=>{
        async function getsearchdt(){
            const resp = await fetch(`api/search?q=${search_query}&p=${page_query}&topic=${topic_query}`,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const dt = await resp.json()
            setdata(dt)
        }

        getsearchdt().then(()=>{setloading(false)});
    },[])

    function fetch_topic(topic){
        if(topic!=="topic"){
            setloading(true);
            setsearchParams({q:search_query, p:page_query,topic:topic});
            async function kjør(){
                const respons=await fetch(`/api/search?q=${search_query}&p=${page_query}&topic=${topic}`,{
                    method:"GET",
                    headers:{
                        "Accept":"application/json"
                    }
                })
                const data= await respons.json();
                setdata(data)
            }
            kjør().then(()=>{setloading(false)})
        } else{
            setsearchParams({q:search_query, p:page_query});
        }
    }

    async function sort(sort_method){
        switch(sort_method){
            case "lowest price":
                const lowest_p=data.sort((kurs_en,kurs_to)=>kurs_en.price-kurs_to.price);
                setdata(lowest_p);
                break

            case "highest price":
                const highest_p=data.sort((kurs_en,kurs_to)=>kurs_to.price-kurs_en.price);
                setdata(highest_p);
                break
            case "highest rating":
                const highest_r=data.sort((kurs_en,kurs_to)=>kurs_to.rating-kurs_en.rating);
                setdata(highest_r);
                break
            default : 
                setloading(true)
                async function getsearchdt(){
                    const resp = await fetch(`api/search?q=${search_query}&p=${page_query}&topic=${topic_query}`,{
                        method:"GET",
                        headers:{
                            "Accept":"application/json"
                        }
                    })
                    const dt = await resp.json()
                    setdata(dt)
                }
        
                getsearchdt().then(()=>{setloading(false)});
                break
        }
    }

    function fetch_price(){
        if(!isNaN(Number(min_price)) & !isNaN(Number(max_price)) & Number(min_price)<Number(max_price)){
            setloading(true)
            async function getsearchdt(){
                const resp = await fetch(`api/search?q=${search_query}&p=${page_query}&topic=${topic_query}&low_P=${min_price}&high_P=${max_price}&low_R=${min_R_query}&high_R=${max_R_query}`,{
                    method:"GET",
                    headers:{
                        "Accept":"application/json"
                    }
                })
                const dt = await resp.json()
                setdata(dt)
            }
    
            getsearchdt().then(()=>{setloading(false)});
            setsearchParams({q:search_query, p:page_query, topic:topic_query, low_P:min_price, hig_P:max_price, min_R:min_R_query, max_R:max_R_query})
        }
    }

    function fetch_rating(){
        if(!isNaN(Number(min_rating)) & !isNaN(Number(max_rating)) & Number(min_rating)<Number(max_rating)){
            setloading(true)
            async function getsearchdt(){
                const resp = await fetch(`api/search?q=${search_query}&p=${page_query}&topic=${topic_query}&low_R=${min_rating}&high_R=${max_rating}&low_P=${min_P_query}&high_P=${max_P_query}`,{
                    method:"GET",
                    headers:{
                        "Accept":"application/json"
                    }
                })
                const dt = await resp.json()
                setdata(dt)
            }
    
            getsearchdt().then(()=>{setloading(false)});
            setsearchParams({q:search_query, p:page_query, topic:topic_query, low_P:min_P_query, hig_P:max_P_query, min_R:min_rating, max_R:max_rating})
        }
    }


    return <div className='search-hjem'>
        <Navbar/>

        <div className='search-div'>

            <div className='search-nav-div'>

                <div className='search-nav'>

                    <div className='search-nav-left price'>
                        
                        <div className='price-disp' onClick={()=>{setprice_disp(!price_disp); setrating_disp(false); setpriceF(true)}}>
                            <p className='price-text' >price</p>
                            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="pil-ned-sort">
                                <path d="M8 13L3.66987 1.75L12.3301 1.75L8 13Z" className="pil_ned pil-courses"/>
                            </svg>
                        </div>
                        
                        <div className='price-div' style={{display:price_disp ? "grid":"none"}}>
                            <div className='price-input-div'>
                                <input className='min_price' value={min_price} onChange={(e)=>{
                                    if(isNaN(Number(e.target.value)) || Number(e.target.value)<0 || Number(e.target.value)>150){
                                        setpriceF(false)
                                    }
                                    else{
                                        setpriceF(true)
                                        setmin_price(e.target.value)
                                    }
                                    }} placeholder='min $' style={{borderColor:priceF?"#506771":"#715050"}}/>
                            </div>
                            <div className='price-input-div'>
                                <input className='max_price' value={max_price} onChange={(e)=>{
                                    if(isNaN(Number(e.target.value)) || Number(e.target.value)<0 || Number(e.target.value)>250){
                                        setpriceF(false)
                                    }else if(Number(min_price)>=Number(e.target.value)){
                                        setpriceF(false)
                                        setmax_price(e.target.value)
                                    }
                                    else{
                                        setpriceF(true)
                                        setmax_price(e.target.value)
                                    }
                                }} placeholder='max $' style={{borderColor:priceF?"#506771":"#715050"}} />
                            </div>
                            <div className='confirm-div' onClick={()=>{setprice_disp(false); fetch_price();}}>
                                <div className='confirm-btn'>
                                    <p className='confirm-btn-text'>Confirm</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='search-nav-left rating'>

                        <div className='rating-disp' onClick={()=>{setrating_disp(!rating_disp); setprice_disp(false); setratingF(true)}}>
                            <p className='rating-text'>rating</p>
                            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="pil-ned-sort">
                                <path d="M8 13L3.66987 1.75L12.3301 1.75L8 13Z" className="pil_ned pil-courses"/>
                            </svg>
                        </div>

                        <div className='rating-div' style={{display:rating_disp ? "grid":"none"}}>
                            <div className='rating-input-div'>
                                <input className='min_rating' value={min_rating} 
                                onChange={(e)=>{
                                    if(isNaN(Number(e.target.value)) || Number(e.target.value)<0 || Number(e.target.value)>10){
                                        setratingF(false)
                                    }
                                    else{
                                        setratingF(true)
                                        setmin_rating(e.target.value)
                                    }
                                }} placeholder='min' style={{borderColor:ratingF?"#506771":"#715050"}}/>
                            </div>

                            <div className='rating-input-div'>
                                <input className='max_rating' value={max_rating}
                                onChange={(e)=>{
                                    if(isNaN(Number(e.target.value)) || Number(e.target.value)<0 || Number(e.target.value)>10){
                                        setratingF(false)
                                    } else if(Number(min_rating)>=Number(e.target.value)){
                                        setratingF(false)
                                        setmax_rating(e.target.value)
                                    }
                                    else{
                                        setratingF(true)
                                        setmax_rating(e.target.value)
                                    }
                                }}
                                placeholder='max' style={{borderColor:ratingF?"#506771":"#715050"}} />  
                            </div>  

                            <div className='confirm-div' onClick={()=>{setrating_disp(false); fetch_rating();}}>
                                <div className='confirm-btn'>
                                    <p className='confirm-btn-text'>Confirm</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='search-nav-center'>

                        <div className="searchbar-div" onKeyDown={keydown_search}>

                            <input type="text" placeholder="search courses" className="searchbar-input" value={search} onChange={(e)=>{ setsearch(e.target.value)}} onClick={()=>{setprice_disp(false); setrating_disp(false)}}/>

                            <div className='searchbar-btn-div'>
                                <button className="searchbar-btn" onClick={search_course}>
                                    <svg viewBox="0 0 52 52" className="search-svg">
                                        <circle cx="30" cy="23" r="19"  strokeWidth="2" fill="none" className="search-svg-circle"/>
                                        <line x1="0.39254" y1="55.3695" x2="16.0247" y2="35.0853" strokeWidth="5" className="search-svg-line"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className='search-nav-right sort'>
                        <select className='sort-select' value={sort_select} onChange={(e)=>{setsort_select(e.target.value); sort(e.target.value);}} onClick={()=>{setprice_disp(false); setrating_disp(false)}}>
                            <option>sort by</option>
                            <option>lowest price</option>
                            <option>highest price</option>
                            <option>highest rating</option>
                        </select>
                    </div>

                    <div className='search-nav-right topic'>
                        <select className='topic-select' value={topic_select} onChange={(e)=>{settopic_select(e.target.value); fetch_topic(e.target.value);}} onClick={()=>{setprice_disp(false); setrating_disp(false);}}>
                            <option>Topic</option>
                            <option>math</option>
                            <option>physics</option>
                            <option>chemistry</option>
                            <option>engineering</option>
                            <option>CT & IT</option>
                            <option>biology</option>
                            <option>medicine</option>
                            <option>economics</option>
                            <option>other</option>
                        </select>
                    </div>

                </div>
                
            </div>


            <div className='search-result-div'>

                <div className='search-result'>

                {loading ? 
                    <Loading/> :
                    
                    <div className='result-div' onClick={()=>{setprice_disp(false); setrating_disp(false)}}>
                        
                        {data.map((kurs)=>{return <div key={`${kurs.name}`} className='result-elem-div'>
                            <div className='result-elem' onClick={()=>{redirect_course(kurs.courseID)}}> 

                                <div className='course-img'><img src={require('../bilder/sfqt.jpg')} alt='course image' className='image'/></div>
                                <div className='course-inf'>
                                    <div className='course-hoved-inf'>
                                            <div className='name'><p className='name-text'>{kurs.name}</p></div>
                                            <div className='pogr'>
                                                <div className='result-rating'>
                                                    <p className='result-rating-text'>{kurs.rating}/10</p>
                                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className='stjerne-svg'>
                                                        <path d="M17.1456 16.4432L20.0298 4.88742C20.282 3.87696 21.718 3.87696 21.9702 4.88742L24.8544 16.4432C24.944 16.8022 25.2245 17.0824 25.5836 17.1716L37.1049 20.0327C38.1161 20.2838 38.1172 21.7207 37.1065 21.9734L25.5821 24.8545C25.2238 24.944 24.944 25.2238 24.8545 25.5821L21.9701 37.1194C21.7177 38.1294 20.2823 38.1294 20.0299 37.1194L17.1455 25.5821C17.056 25.2238 16.7762 24.944 16.4179 24.8545L4.89355 21.9734C3.88278 21.7207 3.88391 20.2838 4.89508 20.0327L16.4164 17.1716C16.7755 17.0824 17.056 16.8022 17.1456 16.4432Z" className='stjerne'/>
                                                    </svg>
                                                </div>
                                                <div className='result-price'><p className='result-price-text'>{kurs.price}$</p></div>
                                            </div>
                                        
                                    </div>
                                    <div className='course-sub-inf'>
                                        <div className='desc'><p className='desc-text'>{kurs.desc}</p></div>
                                    </div>
                                </div>

                            </div>

                        </div>})}

                    </div> 
                }
                
                </div>

            </div>

            <div className='page-nav'>
                <table>
                    <tr>
                        <td className='page-number' style={{color:"#dce1e4"}}>
                            1
                        </td>
                        <td className='page-number'>
                            2
                        </td>
                        <td className='page-number'>
                            3
                        </td>
                        <td className='page-number'>
                            4
                        </td>
                        <td className='page-number'>
                            5
                        </td>
                        <td className='page-number'>
                            6
                        </td>

                    </tr>
                </table>
            </div>
        </div>

    </div>
}
