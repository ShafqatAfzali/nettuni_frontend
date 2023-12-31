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
    var i=0;
    const [antall_page, setantall_page]=useState();
    const [page_arr,setpage_arr]=useState([]);
    const [finns, setfinns]=useState(false);

    useEffect(()=>{
        var previous_page_arr=[];
        for (i=1; i<=Number(antall_page); i++){
            previous_page_arr.push(i)
            console.log(i)
        }
        setpage_arr(previous_page_arr)

    },[antall_page])


    const location = useLocation();
    const search_params=new URLSearchParams(location.search)
    const search_query=search_params.get("q")
    const page_query=search_params.get("p")
    const topic_query=search_params.get("topic")
    const sort_query=search_params.get("sort")
    const min_R_query=search_params.get("low_R")
    const max_R_query=search_params.get("high_R")
    const min_P_query=search_params.get("low_P")
    const max_P_query=search_params.get("high_P")
    const [searchParams, setsearchParams]=useSearchParams()
    const navigate = useNavigate();

    function redirect_course(id){
        navigate(`/course/${id}`)
    }

    useEffect(()=>{
        if(search_query & search_query!=" " & search_query!="null" || search_query!=="cvhdf6vhb24n2jj"){
            setsearch(search_query);
        }
        if(max_P_query!=="null" & min_P_query!=="null"){
            setmax_price(max_P_query);
            setmin_price(min_P_query);
        }
        if(max_R_query!=="null" & min_R_query!=="null"){
            setmax_rating(max_R_query);
            setmin_rating(min_R_query);
        }

        if(topic_query!=="Topic" & topic_query!=="null"){
            settopic_select(topic_query);
        }
        if(sort_query!=="sort by" & sort_query!=="null"){
            setsort_select(sort_query);
        }
    },[])

    function general_fetch(search_q,page_q,topic_q,sort_q,min_P_q,max_P_q,min_R_q,max_R_q){
        //********viktig
        //********viktig
        //husk sql injection prevensjon her og på back-end
        //********viktig
        //********viktig
        setsearchParams({q:search_q, p:page_q, topic:topic_q,sort:sort_q,low_P:min_P_q, high_P:max_P_q, low_R:min_R_q, high_R:max_R_q});
        setloading(true);

        async function getdata(){
            const resp = await fetch(`/api/search?q=${search_q}&p=${page_q}&topic=${topic_q}&sort=${sort_q}&low_P=${min_P_q}&high_P=${max_P_q}&low_R=${min_R_q}&high_R=${max_R_q}`,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const dt = await resp.json()
            setdata(dt.data);
            setantall_page(dt.antall_page);
            if(dt.data.length>=1){setfinns(true)}else{setfinns(false)}
        }

        getdata().then(()=>{setloading(false)});
    }

    useEffect(()=>{
        general_fetch(search_query,page_query,topic_query,sort_query,min_P_query,max_P_query,min_R_query,max_R_query);
    },[])

    function search_course(){
        if(search.length>0){
            general_fetch(search,1,topic_query,sort_query,min_P_query,max_P_query,min_R_query,max_R_query);
        }
    }

    function keydown_search(event){
        if(event.key==="Enter" & search.length>0){
            general_fetch(search,1,topic_query,sort_query,min_P_query,max_P_query,min_R_query,max_R_query);
        }
    }

    function fetch_topic(topic){
        if(topic!=="topic"){
            general_fetch(search_query,1,topic,sort_query,min_P_query,max_P_query,min_R_query,max_R_query);
        } else{
            general_fetch(search_query,1,"topic",sort_query,min_P_query,max_P_query,min_R_query,max_R_query);
        }
    }

    function sort(sort){
        general_fetch(search_query,1,topic_query,sort,min_P_query,max_P_query,min_R_query,max_R_query);
    }

    function fetch_price(){
        if(!isNaN(Number(min_price)) & !isNaN(Number(max_price)) & Number(min_price)<Number(max_price)){
            general_fetch(search_query,1,topic_query,sort_query,min_price,max_price,min_R_query,max_R_query);
        }
    }

    function fetch_rating(){
        if(!isNaN(Number(min_rating)) & !isNaN(Number(max_rating)) & Number(min_rating)<Number(max_rating)){
            general_fetch(search_query,1,topic_query,sort_query,min_P_query,max_P_query,min_rating,max_rating);
        }
    }

    return <div className='search-hjem'>
        <Navbar/>

        <div className='search-div'>

            <section className='search-nav-div'>

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
                
            </section>


            <section className='search-result-div'>

                <div className='search-result'>

                {loading ? 
                    <Loading/> :
                    
                    finns ? <div className='result-div' onClick={()=>{setprice_disp(false); setrating_disp(false)}}>
                        
                        {data.map((kurs)=>{ i++; return <div key={`${i}`} className='result-elem-div'>
                            <div className='result-elem' onClick={()=>{redirect_course(kurs.courseID)}}> 

                                <div className='course-img'><img src={kurs.img} alt='course image' className='image'/></div>
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

                    </div> : <p className='course-exist'>Course does not exist</p>
                }
                
                </div>

            </section>

            {loading ? <div></div> :
                <section className='page-nav'>
                <table>
                    <tr>
                        {page_arr.map((page_number)=>{
                            return <td className={`page-number ${Number(page_query) === page_number ? 'selected-page-number' : ''}`} onClick={()=>{
                                navigate(`/search?q=${search_query}&p=${page_number}&topic=${topic_query}&sort=${sort_query}&low_P=${min_P_query}&high_P=${max_P_query}&low_R=${min_R_query}&high_R=${max_R_query}`);
                                window.scrollTo(0, 0);
                                window.location.reload();
                            }}>{page_number}</td>
                        })}
                    </tr>
                </table>
                </section>
            }
        </div>

    </div>
}
