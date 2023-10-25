import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'

import "../styles/search.css"

import Navbar from './parts/navbar'

export default function Search(){
    const [data,setdata]=useState([])
    const [loading, setloading]=useState(true)
    const [search,setsearch] = useState("")

    const location = useLocation();
    const search_params=new URLSearchParams(location.search)
    const query=search_params.get("q")
    const [searchParams, setsearchParams]=useSearchParams()
    const navigate = useNavigate();

    function redirect_course(id){
        navigate(`/course/${id}`)
    }

    async function search_course(){
        setsearchParams({q:search})
        setloading(true)
        async function getsearchdt(){
            const resp = await fetch(`/search?q=${search}`,{
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
            setsearchParams({q:search})
            setloading(true)
            async function getsearchdt(){
                const resp = await fetch(`/search?q=${search}`,{
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
            const resp = await fetch(`/search?q=${query}`,{
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

                <div className='search-nav-left'>

                    <div className='search-nav-left-elem price'>
                        <p className='search-nav-left-elem-text'>price</p>
                    </div>

                    <div className='search-nav-left-elem price'>
                        <p className='search-nav-left-elem-text'>rating</p>
                    </div>

                    <div className='search-nav-left-elem price'>
                        <p className='search-nav-left-elem-text'>sort by</p>
                    </div>

                </div>

                <div className='search-nav-right'>

                    <div className="searchbar-div" onKeyDown={keydown_search}>

                        <input type="text" placeholder="search courses" className="searchbar-input" value={search} onChange={(e)=>{ setsearch(e.target.value)}} />

                        <button className="searchbar-btn" onClick={search_course}>
                            <svg viewBox="0 0 52 52" className="search-svg">
                                <circle cx="30" cy="23" r="19"  strokeWidth="2" fill="none" className="search-svg-circle"/>
                                <line x1="0.39254" y1="55.3695" x2="16.0247" y2="35.0853" strokeWidth="5" className="search-svg-line"/>
                            </svg>
                        </button>

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
                                    <div className='name'><p className='name-text'>{kurs.name}</p></div>
                                    <div className='price'><p className='price-text'>price: {kurs.price}</p></div>
                                    <div className='rating'><p>rating: {kurs.rating}</p></div>
                                    <div className='desc'><p>{kurs.desc}</p></div>
                                </div>

                            </div>

                        </div>})}

                    </div>
                }
                
                </div>

            </div>
            
        </div>

    </div>
}
