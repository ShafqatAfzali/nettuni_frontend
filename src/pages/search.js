import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

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
                    <div className='loading'><p className='loading-text'>loading SVG/animation</p></div> : 
                    <div className='search-result-elem' style={{display:"grid"}}>
                        {data.map((kurs)=>{return <div key={`${kurs.name}`}> <h3>name: {kurs.name}</h3></div>})}
                    </div>
                }
                
                </div>
            </div>
            
        </div>

    </div>
}
