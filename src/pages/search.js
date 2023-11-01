import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'

import "../styles/search.css"

import Navbar from './parts/navbar'

export default function Search(){
    const [data,setdata]=useState([])
    const [loading, setloading]=useState(true)
    const [search,setsearch] = useState("")
    const [price_disp,setprice_disp]=useState(false)
    const [rating_disp,setrating_disp]=useState(false)
    const [sort_select, setsort_select]=useState();

    const location = useLocation();
    const search_params=new URLSearchParams(location.search)
    const search_query=search_params.get("q")
    const page=search_params.get("p")
    const [searchParams, setsearchParams]=useSearchParams()
    const navigate = useNavigate();

    function redirect_course(id){
        navigate(`/course/${id}`)
    }

    async function search_course(){
        setsearchParams({q:search, p:1})
        setloading(true)
        async function getsearchdt(){
            const resp = await fetch(`/search?q=${search}&p=1`,{
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
            setsearchParams({q:search, p:1})
            setloading(true)
            async function getsearchdt(){
                const resp = await fetch(`/search?q=${search}&p=1`,{
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
            const resp = await fetch(`/search?q=${search_query}&p=${page}`,{
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


    return <div className='search-hjem'>
        <Navbar/>

        <div className='search-div'>

            <div className='search-nav-div'>

                <div className='search-nav'>

                    <div className='search-nav-left price' onClick={()=>{setprice_disp(!price_disp); setrating_disp(false)}}>
                        <p className='price-text'>price</p>

                        <div className='price-div' style={{display:price_disp ? "flex":"none"}}>
                            
                        </div>

                    </div>

                    <div className='search-nav-left rating' onClick={()=>{setrating_disp(!rating_disp); setprice_disp(false)}}>
                        <p className='rating-text'>rating</p>

                        <div className='rating-div' style={{display:rating_disp ? "flex":"none"}}>
                            
                        </div>

                    </div>

                    <div className='search-nav-center'>

                        <div className="searchbar-div" onKeyDown={keydown_search}>

                            <input type="text" placeholder="search courses" className="searchbar-input" value={search} onChange={(e)=>{ setsearch(e.target.value)}} />

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
                        <select className='sort-select' value={sort_select} onChange={(e)=>{setsort_select(e.target.value)}}>
                            <option>sort by</option>
                            <option>lowest price</option>
                            <option>highest price</option>
                            <option>highest rating</option>
                        </select>
                    </div>

                    <div className='search-nav-right topic'>
                        <select className='topic-select' value={sort_select} onChange={(e)=>{setsort_select(e.target.value)}}>
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
                    <div className='loading'><p className='loading-text'>loading...</p></div> : 
                    <div className='result-div'>
                        
                        {data.map((kurs)=>{return <div key={`${kurs.name}`} className='result-elem-div'>
                            <div className='result-elem' onClick={()=>{redirect_course(kurs.courseID)}}> 

                                <div className='course-img'><img src={require('../bilder/sfqt.jpg')} alt='course image' className='image'/></div>
                                <div className='course-inf'>
                                    <div className='course-hoved-inf'>
                                        <div className='course-hoved-inf-div'>
                                            <div className='name'><p className='name-text'>{kurs.name}</p></div>
                                            <div className='result-price'><p className='result-price-text'>price: {kurs.price}</p></div>
                                        </div>
                                    </div>
                                    <div className='course-sub-inf'>
                                        <div className='course-sub-inf-div'>
                                            <div className='result-rating'><p>rating: {kurs.rating}</p></div>
                                            <div className='desc'><p>{kurs.desc}</p></div>
                                        </div>
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
                        <td>
                            1
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            4
                        </td>
                        <td>
                            ...
                        </td>
                        <td>
                            13
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
}
