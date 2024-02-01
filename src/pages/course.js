import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/course.css";
import Navbar from "./parts/navbar";
import Loading from "./parts/loading"



export default function Course(){
    const {id} = useParams();
    const [loading, setloading]=useState(true)
    const [login, setlogin]=useState(false)
    const [visinf, setvisinf]=useState(true)
    const[activechap,setactivechap]=useState(-1);
    const [subchap, setsubchap]=useState(-1)
    const [activesolution, setactivesolution]=useState(false)

    function åpnechap(chapNb){
        if(chapNb!==activechap){
            setactivesolution(false)
            setactivechap(chapNb)
            setsubchap(-1)
        }else{
            setactivesolution(false)
            setactivechap(-1)
            setsubchap(-1)
        }
    }

    function åpnesubchap(subchapNb){
        if(subchapNb!==subchap){
            setactivesolution(false)
            setsubchap(subchapNb)
        }else{
            setactivesolution(false)
            setsubchap(-1)
        }
    }

    const chapterdt=[
        {chNb:0, chName:"Introduction", subchap:[{subchapNb:1,subchapName:"Describtion"},{subchapNb:2,subchapName:"Prerequisites"}]},

        {chNb:1, chName:"Continouity",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},

        {chNb:2, chName:"Derivatives",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},

        {chNb:3, chName:"Integrals",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},

        {chNb:4, chName:"Methods of integration",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},

        {chNb:5, chName:"Differentials",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},
        
        {chNb:6, chName:"Appendix A (Complex Numbers)",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]},
        
        {chNb:7, chName:"Appendix B (Fundemental theorem of calculus)",subchap:[{subchapNb:1,subchapName:"epsilon-delta"},{subchapNb:2,subchapName:"Continuity definition"},{subchapNb:3,subchapName:"Continuity definition"},{subchapNb:4,subchapName:"Continuity definition"}]}]
/*
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

        get_course().then(()=>{window.scrollTo(0,0); setloading(false)})
    },[id])
*/

    return <div className="course-page">

        <Navbar login={login} setlogin={setlogin} />

        <div className="main-course">

            <header className="course-header">
                <h2 className="course-header-text">Calculus 1</h2>
            </header>

            <section className="course-main-info" style={visinf ? {display:"block"}:{display:"none"}}>

                <div className="course-info-container">

                    <div className="c-imp-info">
                        <div className="c-category c-impo-elem">
                            <div className="cat-container c-container1"> <p className="c-cat-text c-impo-text1">Category:</p></div>
                            <div className="cat-container c-container2"> <p className="c-cat-text c-impo-text2">Math</p></div>
                        </div>
                        <div className="c-ref c-impo-elem">
                            <div className="ref-container c-container1"> <p className="c-ref-text c-impo-text1">Reference book:</p></div>
                            <div className="ref-container c-container2"> <p className="c-ref-text c-impo-text2">Calculus a complete guide by A.adams and B.Witten</p></div>
                        </div>
                        <div className="c-grade c-impo-elem">
                            <div className="grade-container c-container1"> <p className="c-grade-text c-impo-text1">Grade Level:</p></div>
                            <div className="grade-container c-container2"> <p className="c-grade-text c-impo-text2">University</p></div>
                        </div>
                        <div className="c-tier c-impo-elem">
                            <div className="tier-container c-container1"> <p className="c-tier-text c-impo-text1">Tier:</p></div>
                            <div className="tier-container c-container2"> <p className="c-tier-text c-impo-text2">Free</p></div>
                        </div>
                    </div>

                </div>

                <div className="c-desc">
                        <h3 className="c-desc-titel">Description:</h3>
                        <p className="c-desc-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>

                <div className="c-pre">
                        <h3 className="c-pre-titel">Prerequisites:</h3>
                        <p className="c-pre-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>

            </section>

            <div className="hide-info" style={visinf ? {top:"100px"}:{top:"0px"}}>
                <div className="hide-svg-div" onClick={()=>{setvisinf(!visinf)}} >
                    {visinf ? 
                    
                        <svg className="hide-svg" style={{marginBottom:"0px"}} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36 38L20 18L4 38" className="hide-svg-elem" stroke-width="3"/>
                            <path d="M36 31L20 11L4 31" className="hide-svg-elem" stroke-width="3"/>
                            <path d="M36 24L20 4L4 24" className="hide-svg-elem" stroke-width="3"/>
                        </svg>
                        
                        : 

                        <svg className="hide-svg" style={{marginBottom:"10px"}} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2L20 22L36 2" className="hide-svg-elem" stroke-width="3"/>
                            <path d="M4 9L20 29L36 9" className="hide-svg-elem" stroke-width="3"/>
                            <path d="M4 16L20 36L36 16" className="hide-svg-elem" stroke-width="3"/>
                        </svg>
                    }
                </div>
            </div>

        </div>

        <div className="course-content-div" style={visinf ? {top:"172px"}:{top:"72px"}}>
            <div className="course-content-container">
                {chapterdt.map((chapter)=>{
                    if(chapter.chNb>0){
                        return (
                            <div className="total-chap" key={chapter.chNb}>
                                <div className="chapter-div" onClick={()=>{åpnechap(chapter.chNb)}}> 
                                    <div className="chapter"> <h3 className="chapter-title">Chapter {chapter.chNb}: &nbsp; &nbsp; {chapter.chName}</h3></div>

                                    <div className={activechap==chapter.chNb ? "active-pil" : "not-active-pil"}>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 25L30 35L35 25" stroke="white" stroke-width="2"/>
                                        </svg>
                                    </div>

                                </div>

                                <div className={activechap==chapter.chNb ? "active-subchap" : "not-subchap"}>{chapter.subchap.map((sub)=>{
                                        return(
                                            <div className="total-subchap">
                                                <div className="subchap" onClick={()=>{åpnesubchap(sub.subchapNb)}}>
                                                    <div className="subchap-title-div"><h3 className="subchap-title">Subchapter {sub.subchapNb}: &nbsp; {sub.subchapName}</h3></div>

                                                    <div className={subchap==sub.subchapNb ? "active-pil" : "not-active-pil"}>
                                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M25 25L30 35L35 25" stroke="white" stroke-width="2"/>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className={subchap==sub.subchapNb ? "active-material" : "not-active-material"}>
                                                    <div className="material">
                                                        <div className="material-elem">
                                                            <div className="material-div">
                                                                <div className="material-svg-div">
                                                                    <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="3" y="4" width="43" height="28" rx="4" stroke="#FFFFFF" stroke-width="2"/>
                                                                        <path d="M37.07 17.0947C37.8371 17.4545 37.8371 18.5455 37.07 18.9053L16.4247 28.59C15.7615 28.9011 15 28.4172 15 27.6847V8.31533C15 7.58284 15.7615 7.09891 16.4247 7.40999L37.07 17.0947Z" fill="#FFFFFF"/>
                                                                    </svg>
                                                                </div>

                                                                <div className="material-title"><h3 className="material-text">Lecture</h3></div>
                                                                
                                                                <div className="material-minutes"><h3 className="material-text">20:43</h3></div>
                                                            </div>
                                                        </div>

                                                        <div className="material-elem">
                                                            <div className="material-div">
                                                                <div className="material-svg-div">
                                                                    <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M14.8046 2.45054C14.7433 2.70469 14.728 3.15523 14.7433 3.4556L14.7893 3.99856L13.8084 4.2065C13.272 4.31047 12.3525 4.59928 11.7701 4.83032L10.6973 5.24621L9.76245 4.55307L8.81226 3.84838L7.67816 4.7148L6.54406 5.58123L7.47893 6.29747L8.41379 7.02527L7.81609 7.83393C7.49425 8.27292 7.11111 8.96606 6.97318 9.35884L6.71264 10.0866H5.36398H4V11.2996V12.5126H5.36398H6.71264L6.97318 13.2404C7.11111 13.6332 7.49425 14.3264 7.81609 14.7653L8.41379 15.574L7.47893 16.3018L6.54406 17.018L7.67816 17.8845L8.81226 18.7509L9.74713 18.0578L10.682 17.3646L11.8927 17.8267C12.567 18.0809 13.5019 18.3581 13.9617 18.4505L14.8046 18.6007L14.7586 19.0282C14.728 19.2708 14.7433 19.7213 14.8046 20.0332L14.9119 20.5993H16.4291H17.931L17.977 19.6058L18.023 18.6007L18.8659 18.4505C19.3257 18.3581 20.2605 18.0809 20.9349 17.8267L22.1456 17.3646L23.0805 18.0578L24.0153 18.7509L25.1494 17.8845L26.2835 17.018L25.3487 16.3018L24.4138 15.574L25.0115 14.7653C25.3333 14.3264 25.7165 13.6332 25.8544 13.2404L26.1149 12.5126H27.4636H28.8276V11.2996V10.0866H27.4483H26.069L25.977 9.76318C25.7778 9.05848 25.4253 8.37689 24.9349 7.71841L24.4138 7.02527L25.3487 6.29747L26.2835 5.58123L25.1494 4.7148L24.0153 3.84838L23.0651 4.55307L22.1303 5.24621L21.0575 4.83032C20.4751 4.59928 19.5402 4.31047 19.0038 4.2065L18.023 3.99856L17.977 3.00505L17.931 2H16.4138H14.9119L14.8046 2.45054ZM18.8659 7.22166C20.1379 7.66065 21.0728 8.35379 21.7011 9.31263C24.2299 13.2058 18.8812 17.2029 13.7165 15.2852C12.6437 14.8924 11.5709 14.0838 11.0498 13.2751C9.48659 10.826 11.1724 7.85704 14.6207 7.01372C15.6782 6.74801 17.8391 6.85199 18.8659 7.22166Z" fill="white"/>
                                                                        <path d="M32.659 13.6679C32.659 14.2224 32.5977 14.4996 32.4751 14.5227C31.5862 14.6845 30.4828 15.0079 29.9923 15.2505L29.41 15.5393L28.613 14.9502L27.8161 14.361L26.9119 15.0542L26.0077 15.7473L26.7586 16.3249L27.5096 16.891L27.0651 17.4917C26.8353 17.8267 26.5287 18.3812 26.3755 18.7393L26.1303 19.3863L25.0268 19.4209L23.9234 19.4556V20.426V21.4079H25.0575H26.1916L26.2835 21.7892C26.3295 21.9971 26.6207 22.5516 26.9119 23.0253L27.4636 23.8686L26.7586 24.4116C26.3755 24.7004 26.069 24.9892 26.069 25.0585C26.069 25.1856 27.6322 26.3755 27.8008 26.3755C27.8467 26.3755 28.2299 26.1444 28.6284 25.8556C29.0115 25.5668 29.364 25.3357 29.3946 25.3357C29.4253 25.3357 29.8544 25.4859 30.3295 25.6823C30.8046 25.8671 31.5249 26.0866 31.9234 26.156L32.6437 26.3061L32.6897 27.1148L32.7356 27.935L34.0077 27.9697L35.2644 28.0043V27.1495V26.283L35.8467 26.2022C36.1533 26.1675 36.9195 25.948 37.5479 25.717L38.6667 25.3126L39.4176 25.8671L40.1686 26.4217L41.0881 25.7401L42.0077 25.0585L41.2261 24.4578L40.4444 23.857L40.8276 23.418C41.1494 23.0484 41.5785 22.2166 41.7931 21.5466C41.8238 21.4542 42.1916 21.4079 42.9272 21.4079H44V20.426V19.444H42.9425H41.8697L41.6245 18.774C41.4866 18.4159 41.1648 17.8498 40.9195 17.5148L40.4751 16.9141L41.2414 16.3596L41.9923 15.8051L41.0575 15.0657L40.1379 14.3379L39.341 14.9155L38.5594 15.5047L37.9464 15.2159C37.6092 15.0657 36.8736 14.8231 36.3065 14.696L35.2644 14.4534V13.6563V12.8592H33.9617H32.659V13.6679ZM36.0613 17.1105C36.9808 17.457 37.9004 18.1502 38.3602 18.8433C38.8659 19.6173 38.8659 21.2347 38.3602 21.9625C37.4253 23.291 35.9387 23.9957 34.0383 23.9957C32.046 23.9957 30.4521 23.2448 29.6092 21.8816C29.0881 21.0383 29.0575 19.7791 29.5479 18.9704C30.1303 18 31.2797 17.226 32.659 16.891C33.41 16.7061 35.295 16.8332 36.0613 17.1105Z" fill="white"/>
                                                                        <path d="M19.0498 21.2693C18.9425 21.2924 18.8659 21.5697 18.8659 21.9856V22.6556L18.3448 22.7249C18.0536 22.7711 17.41 22.956 16.9195 23.1408L16.0307 23.4758L15.387 23.0022L14.728 22.517L13.9617 23.083L13.1954 23.6491L13.8391 24.1458L14.4828 24.6426L14.1916 25.0238C14.023 25.2202 13.7471 25.7054 13.5785 26.0866L13.2567 26.7798L12.3831 26.8144L11.5096 26.8491V27.6462V28.4549H12.3985H13.3027L13.5019 28.9401C13.6092 29.2173 13.8544 29.691 14.069 30.0029L14.4521 30.569L13.8238 31.0426L13.1954 31.5278L13.9617 32.0939L14.728 32.6599L15.341 32.2094L15.9387 31.7704L16.9808 32.117C17.5479 32.3134 18.2069 32.5097 18.4521 32.5444C18.8506 32.6137 18.8659 32.6484 18.8659 33.3069V34H19.9387H21.0115V33.3184V32.6253L21.8238 32.452C22.2529 32.348 22.8966 32.1516 23.2337 32.0014L23.8467 31.7242L24.5058 32.1978L25.1494 32.6599L25.9157 32.0939L26.682 31.5278L26.0536 31.0426L25.4406 30.569L25.8391 30.0029C26.0536 29.691 26.3142 29.2173 26.4061 28.9516L26.5594 28.4549H27.4636H28.3678V27.6462V26.8491L27.4943 26.8144L26.636 26.7798L26.3602 26.1675C26.2069 25.8325 25.931 25.3588 25.7471 25.1047L25.3946 24.6426L26.0383 24.1458L26.682 23.6491L25.9157 23.083L25.1494 22.517L24.5058 22.9906L23.8467 23.4643L23.2337 23.2217C22.8966 23.0946 22.2835 22.8982 21.8544 22.7942L21.0881 22.5978L21.0115 21.9162L20.9349 21.2347L20.0766 21.2231C19.6169 21.2231 19.1418 21.2462 19.0498 21.2693ZM21.7165 24.8505C22.5134 25.1625 23.5249 25.9942 23.7854 26.5603C23.8927 26.8029 23.9847 27.3227 23.9847 27.7155C23.9847 28.5935 23.3717 29.483 22.4061 30.0375C20.7356 31.0079 18.023 30.7769 16.8123 29.5755C15.9234 28.709 15.6475 27.3805 16.1533 26.4794C16.5977 25.6708 17.7165 24.9083 18.8659 24.631C19.4943 24.4693 21.0421 24.5964 21.7165 24.8505Z" fill="white"/>
                                                                    </svg>

                                                                </div>
                                                                <div className="material-title"><h3 className="material-text">Problems</h3></div>
                                                                <div className="material-minutes"><h3 className="material-text">16</h3></div>
                                                            </div>
                                                        </div>

                                                        <div className="material-elem">
                                                            <div className="material-div" onClick={()=>{setactivesolution(!activesolution)}}>
                                                                <div className="material-title-s"><h3 className="material-text-s">Solutions</h3></div>

                                                                <div className={activesolution ? "not-active-pil" : "active-pil"}>
                                                                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M25 25L30 35L35 25" stroke="white" stroke-width="2"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={activesolution ? "active-solution" : "not-active-solution"}>
                                                            <div className="solution-div">

                                                                <div className="solution-material">
                                                                    <div className="material-svg-div">
                                                                        <svg width="49" height="36" viewBox="0 0 49 36" fill="none">
                                                                            <path d="M20.7578 3.5375C20.375 3.61875 20.0313 3.7 20 3.71875C19.9609 3.7375 19.9531 4.41875 19.9766 5.2375L20.0156 6.71875L19.1719 7.03125C18.7031 7.2 17.9375 7.55 17.4609 7.80625C16.9922 8.05625 16.5703 8.2625 16.5234 8.2625C16.4844 8.2625 15.7422 7.925 14.8828 7.50625L13.3203 6.75L12.6641 7.275L12.0078 7.8L12.9609 9.05625C13.4766 9.75 13.9063 10.3375 13.9063 10.35C13.9063 10.3687 13.6484 10.7 13.3281 11.0812C13.0078 11.4687 12.5625 12.0875 12.3359 12.4625L11.9219 13.1437L10.0625 13.1062L8.20313 13.075L8.05469 13.4875C7.82031 14.1125 7.71875 14.525 7.78906 14.5437C7.82031 14.5562 8.55469 14.8812 9.41406 15.2687C10.5078 15.7625 10.9688 16.0062 10.9375 16.0687C10.9219 16.1187 10.8984 16.8375 10.8984 17.675L10.8906 19.1937L9.3125 19.8937C8.05469 20.45 7.73438 20.6187 7.74219 20.7187C7.74219 20.7875 7.83594 21.1125 7.95313 21.4375L8.16406 22.0312L10.0391 22.0062L11.9141 21.9875L12.1719 22.4437L12.4219 22.9062L14.0313 21.6187L15.6328 20.3375L15.5156 20.075C15.0938 19.125 14.9453 17.3 15.1953 16.15C15.9453 12.7062 19.3828 9.95 23.7031 9.33125C24.6797 9.19375 26.3828 9.2 27.3438 9.34375C31.6484 9.9875 34.8984 12.5562 35.7891 16.025C35.9922 16.825 36.0078 18.2 35.8203 19.0312C35.3125 21.2937 33.7031 23.2562 31.3203 24.5375C29.5469 25.4875 27.6875 25.9375 25.5547 25.9375C24.4688 25.9375 23.8906 25.8813 22.8672 25.675L22.1797 25.5375L20.5781 26.8188L18.9844 28.0938L19.4609 28.2688L19.9375 28.4375L19.9063 29.9313L19.8828 31.425L20.4297 31.5563C21.3984 31.7813 21.6719 31.825 21.6953 31.7688C21.7109 31.7438 22.1172 31.1563 22.6016 30.4688C23.3281 29.4375 23.5078 29.225 23.6328 29.2438C23.7188 29.2563 24.625 29.2688 25.6563 29.275L27.5156 29.2813L28.3672 30.5C28.8281 31.1688 29.2266 31.7438 29.2422 31.7813C29.2578 31.8125 29.6563 31.7563 30.1641 31.65L31.0547 31.4625L31.0234 29.9625L30.9922 28.4688L31.5859 28.2563C32.2969 28.0125 33.4688 27.4625 34.0469 27.1125L34.4688 26.8625L36.0313 27.6188C37.0469 28.1125 37.6406 28.3688 37.7266 28.3438C37.8047 28.325 38.125 28.1 38.4375 27.8438C38.9766 27.4 38.9922 27.3688 38.8906 27.2313C38.8281 27.1563 38.3984 26.5813 37.9375 25.9563L37.1016 24.8187L37.6563 24.1437C37.9688 23.775 38.4141 23.15 38.6484 22.7625L39.0859 22.0562L40.9453 22.075L42.8125 22.0937L42.9219 21.7812C43.125 21.225 43.2891 20.675 43.2656 20.6562C43.25 20.65 42.5234 20.3125 41.6406 19.9187C40.5781 19.4375 40.0547 19.1687 40.0781 19.1125C40.0938 19.0687 40.1172 18.3437 40.1172 17.5062L40.125 15.9812L41.7031 15.2875C42.9453 14.7375 43.2734 14.5687 43.2734 14.4687C43.2734 14.4 43.1797 14.075 43.0625 13.75L42.8516 13.1562L40.9766 13.175L39.1016 13.2L38.7109 12.5187C38.5 12.15 38.0625 11.5375 37.7422 11.1562C37.4297 10.7812 37.1719 10.4375 37.1641 10.4062C37.1641 10.3687 37.5781 9.8 38.0781 9.1375C38.5781 8.475 38.9844 7.89375 38.9844 7.85625C38.9844 7.8125 38.7031 7.55625 38.3672 7.2875L37.7422 6.79375L36.1328 7.5625L34.5234 8.33125L34.1953 8.1375C33.6484 7.80625 32.6484 7.3375 31.8438 7.025L31.0781 6.725L31.1016 5.2375L31.1328 3.74375L30.6641 3.63125C30.0469 3.48125 29.375 3.35625 29.3359 3.38125C29.3281 3.39375 28.9219 3.96875 28.4453 4.65625L27.5859 5.9L25.5469 5.90625H23.5L22.6328 4.64375C21.9375 3.6375 21.7266 3.375 21.6016 3.38125C21.5156 3.38125 21.1328 3.45 20.7578 3.5375Z" fill="white"/>
                                                                            <path d="M24.6641 12.1875C23.2891 12.3625 22.0938 12.8375 21.0781 13.6125C20 14.4375 19.3516 15.4063 19.0938 16.5625C18.9531 17.2313 18.9844 18.0875 19.1719 18.7188L19.2891 19.0938L13.0078 24.125C7.08594 28.8625 6.71875 29.1688 6.71875 29.375C6.71875 29.575 6.86719 29.7063 8.61719 31.1063C10.3672 32.5063 10.5312 32.625 10.7812 32.625C11.0391 32.625 11.4219 32.3313 17.3438 27.5938L23.6328 22.5625L24.1016 22.6688C24.8359 22.8375 26.5781 22.8188 27.3672 22.6375C28.5938 22.3563 29.5391 21.925 30.375 21.25C31.9219 20.0125 32.6016 18.275 32.2266 16.5313C32.125 16.075 31.7969 15.2438 31.6641 15.125C31.6484 15.1125 30.7109 15.8375 29.5859 16.7313C28.4609 17.6313 27.4375 18.4 27.3203 18.4375C27.0156 18.525 26.5938 18.5188 26.3438 18.4125C26.2266 18.3625 25.7578 18.0188 25.2969 17.6438C24.4062 16.9188 24.2969 16.75 24.4141 16.2625C24.4609 16.0625 24.7578 15.7938 26.5469 14.3625L28.625 12.6938L28.1953 12.5438C27.2578 12.2125 25.7109 12.0563 24.6641 12.1875ZM10.5859 29.225C10.8438 29.325 11.0938 29.6313 11.0938 29.8563C11.0938 30.0438 10.8125 30.35 10.5547 30.4313C10.0469 30.6063 9.49219 30.3563 9.40625 29.925C9.34375 29.6375 9.54688 29.3313 9.86719 29.2188C10.1875 29.1063 10.2734 29.1063 10.5859 29.225Z" fill="white"/>
                                                                        </svg>

                                                                    </div>

                                                                    <div className="material-title"><h3 className="material-text">Solution manual</h3></div>
                                                                    
                                                                    <div className="material-minutes">
                                                                        <h3 className="material-text">17</h3>
                                                                    </div>
                                                                </div>
                                                          
                                                                <div className="solution-material">
                                                                    <div className="material-svg-div">
                                                                        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="3" y="4" width="43" height="28" rx="4" stroke="#FFFFFF" stroke-width="2"/>
                                                                            <path d="M37.07 17.0947C37.8371 17.4545 37.8371 18.5455 37.07 18.9053L16.4247 28.59C15.7615 28.9011 15 28.4172 15 27.6847V8.31533C15 7.58284 15.7615 7.09891 16.4247 7.40999L37.07 17.0947Z" fill="#FFFFFF"/>
                                                                        </svg>
                                                                    </div>

                                                                    <div className="material-title"><h3 className="material-text">Problem 16</h3></div>
                                                                    
                                                                    <div className="material-minutes">
                                                                        <h3 className="material-text">4:15</h3>
                                                                    </div>
                                                                </div>

                                                                <div className="solution-material">

                                                                    <div className="material-svg-div">
                                                                        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="3" y="4" width="43" height="28" rx="4" stroke="#FFFFFF" stroke-width="2"/>
                                                                            <path d="M37.07 17.0947C37.8371 17.4545 37.8371 18.5455 37.07 18.9053L16.4247 28.59C15.7615 28.9011 15 28.4172 15 27.6847V8.31533C15 7.58284 15.7615 7.09891 16.4247 7.40999L37.07 17.0947Z" fill="#FFFFFF"/>
                                                                        </svg>
                                                                    </div>

                                                                    <div className="material-title"><h3 className="material-text">Problem 17</h3></div>
                                                                    
                                                                    <div className="material-minutes">
                                                                        <h3 className="material-text">6:23</h3>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                })}</div>

                            </div>
                        )
                    }
                    else{
                        return (
                            <div className="total-chap" key={chapter.chNb}>

                                <div className="chapter-div" onClick={()=>{åpnechap(chapter.chNb)}}> 
                                    <div className="chapter"> <h3 className="chapter-title">{chapter.chName}</h3></div>
                                    <div className="chapter-pil">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 25L30 35L35 25" stroke="white" stroke-width="2"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className={activechap==chapter.chNb ? "active-subchap" : "not-subchap"}>{chapter.subchap.map((sub)=>{
                                            return(
                                                <div className="subchap">
                                                    <div className="subchap-title-div">
                                                        <h3 className="subchap-title">Subchapter {sub.subchapNb}: &nbsp; {sub.subchapName}</h3>
                                                    </div>
                                                    </div>
                                            )
                                })}</div>

                            </div>
                        )     
                    }
                })}
            </div>
        </div>


    </div>
}