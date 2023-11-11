import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/course.css";
import Navbar from "./parts/navbar";
import Loading from "./parts/loading"

export default function Course(){
    const {id} = useParams();
    const [loading, setloading]=useState(true)
    const [courseDT, setCourseDT]=useState({})

    useEffect(()=>{
        async function get_course(){
            const resp=await fetch(`/api/course/${id}`,{
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


    return <div className="course-page">
        <Navbar/>
        {loading ? <Loading/> : 


        <div className="main">

            <section className="main-info-sec">

                <div className="tutor-info">
                    <div className="main-tutor-box">

                        <div className="publisher">
                            <p className="publisher-text">publisher</p>
                        </div>

                        <div className="main-tutor-info">
                            <div className="tutor-img-div">
                                <div className="tutor-img"><img className="tutor-pic" src={require("../bilder/tutor.jpg")} /></div>
                            </div>

                            <div className="tutor-main-info-div">
                                <div className="tutor-main-info">
                                    <div className="tutor-name tt"><p className="tutor-text">cristiano ronaldo</p></div>
                                    <div className="tutor-rating tt"><p className="tutor-text">rating: 7/10</p></div>
                                    <div className="tutor-education tt"><p className="tutor-text">B.A. Mathematics</p></div>
                                </div>
                                <div className="tutor-profile">
                                    <div className="profile-link">
                                        <p className="profile-text">view profile</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="course-info">
                    <div className="course-info-box">

                        <div className="course-name">
                                <p className="course-name-text">{courseDT.name}</p>
                        </div>

                        <div className="course-sub-info">
                            <div className="course-sub-info-div">

                                <div className="course-desc">
                                        <p className="course-desc-text">{courseDT.desc}</p>
                                </div>

                                <div className="course-rating-div">
                                    <div className="course-rating">
                                        <p className="course-general-text">rating:{courseDT.rating}</p>
                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className='stjerne-svg'>
                                                        <path d="M17.1456 16.4432L20.0298 4.88742C20.282 3.87696 21.718 3.87696 21.9702 4.88742L24.8544 16.4432C24.944 16.8022 25.2245 17.0824 25.5836 17.1716L37.1049 20.0327C38.1161 20.2838 38.1172 21.7207 37.1065 21.9734L25.5821 24.8545C25.2238 24.944 24.944 25.2238 24.8545 25.5821L21.9701 37.1194C21.7177 38.1294 20.2823 38.1294 20.0299 37.1194L17.1455 25.5821C17.056 25.2238 16.7762 24.944 16.4179 24.8545L4.89355 21.9734C3.88278 21.7207 3.88391 20.2838 4.89508 20.0327L16.4164 17.1716C16.7755 17.0824 17.056 16.8022 17.1456 16.4432Z" className='stjerne'/>
                                                    </svg>
                                    </div>

                                    <div className="course-nbratings">
                                        <p className="course-general-text">total reviews:{courseDT.NbRatings}</p>
                                    </div>
                                </div>

                                <div className="course-price-div">
                                    <div className="course-price">
                                        <p className="course-general-text">price: {courseDT.price} <strong className="dollar">$</strong></p>
                                    </div>

                                    <div className="course-students">
                                        <p className="course-general-text">total students:8</p>
                                    </div>
                                </div>
                            </div>

                            <div className="course-purchase">

                                <div className="course-img-div">
                                    <div className="course-img" style ={ { backgroundImage: `url(../${courseDT.img})`} }>
                                    </div>
                                </div>

                                <div className="purchase">
                                    <div className="purchase-box">
                                        <div>
                                        <p className="purchase-text">purchase</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>}

    </div>
}