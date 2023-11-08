import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/hjem.css"
import Navbar from "./parts/navbar";

import { useState } from "react";

export default function Hjem(){
    const navigate = useNavigate();
    const [search,setsearch] = useState("")


    function search_course(){
        navigate(`/search?q=${search}&p=1`)
    }

    function browse(){
        navigate(`/search?q=cvhdf6vhb24n2jj&p=1`)
    }

    function keydown_search(event){
        if(event.key==="Enter"){
            navigate(`/search?q=${search}&p=1`)
        }
    }

    //cvhdf6vhb24n2jj
    
    return <div className="hjem">
        <Navbar/>
        
        <section className="search-sec" onKeyDown={keydown_search}>
            <div className="search-sec-div">
            <input type="text" placeholder="search courses" className="searchbar" value={search} onChange={(e)=>{ setsearch(e.target.value)}} />
            <button className="search-btn" onClick={search_course}>
                <svg viewBox="0 0 52 52" className="search-svg">
                    <circle cx="30" cy="23" r="19"  strokeWidth="2" fill="none" className="search-svg-circle"/>
                    <line x1="0.39254" y1="55.3695" x2="16.0247" y2="35.0853" strokeWidth="5" className="search-svg-line"/>
                </svg>
            </button>
            </div>
            <div className="redirect">
                <div className="browse-div" onClick={browse}>
                    <div className="browse"><p1 className="browse-text">Browse courses</p1></div>
                </div>
                <div className="publish-div">
                    <div className="publish"><p1 className="publish-text">publish course</p1></div>
                </div>
            </div>
        </section>
        <section className="exp-sec"></section>
    </div>
}