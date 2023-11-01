import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./parts/navbar";

export default function Course(){
    const {id} = useParams();
    const [loading, setloading]=useState(true)
    const [courseDT, setCourseDT]=useState({})

    useEffect(()=>{
        async function get_course(){
            const resp=await fetch(`/course/${id}`,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const dt= await resp.json()
            setCourseDT(dt)
        }

        get_course().then(()=>{setloading(false)})
    },[id])


    return <div>

        {loading ? <div><h1>loading...</h1></div> : 
        
        <div>

        <h3>name:{courseDT.name}</h3>
        <h3>price:{courseDT.price}</h3>
        <h3>rating:{courseDT.rating}</h3>
        <h3>number of ratings:{courseDT.NbRatings}</h3>
        <h3>desc:{courseDT.desc}</h3>
        <h3>course-id:{courseDT.courseID}</h3>
        <h3>topic:{courseDT.topic}</h3>
        </div>}

    </div>
}