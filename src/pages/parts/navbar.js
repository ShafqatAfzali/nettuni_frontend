import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/navbar.css"
import Login from "./login";

import { useState, useEffect } from "react";

export default function Navbar(){
    const navigate = useNavigate();
    const [login,setlogin]=useState(false)
    const [signup, setsignup]=useState(false)
    const [vis_burger, setvis_burger]=useState(false)
    const [brgr_style, setbrgr_style] = useState({display:"none"})


    useEffect(()=>{
        if(vis_burger){

            setbrgr_style({ animation:"burger-ned 600ms 1", display:"grid" })

        } else{

            setbrgr_style({ animation:"burger-opp 602ms 1", display:"grid"});

            const timer1 = setTimeout(() => {
                setbrgr_style({display:"none"})
                return ()=>{clearTimeout(timer1)}
            }, 600);
        }

    },[vis_burger])

    var brgr_anim = vis_burger ? {animation: "burger-meny-anim1 600ms 1", transform:"rotate(90deg)"} : {animation: "burger-meny-anim2 600ms 1"} ;
    
    return <div className="nav">
        
        <Login login={login} signup={signup} setsignup={setsignup} setlogin={setlogin} />

        <div className="navbar">
            
            <div className="logo" onClick={()=>{
                navigate("/")
            }}>
                <svg width="174" height="50" viewBox="0 0 174 50" fill="none" className="logo-svg">
                    <path d="M36 25C36 25.2526 35.8473 25.6524 35.2023 26.1608C34.5685 26.6603 33.5894 27.1539 32.2904 27.5869C29.7028 28.4494 26.0646 29 22 29C17.9354 29 14.2972 28.4494 11.7096 27.5869C10.4106 27.1539 9.43154 26.6603 8.79775 26.1608C8.15268 25.6524 8 25.2526 8 25C8 24.7474 8.15268 24.3476 8.79775 23.8392C9.43154 23.3397 10.4106 22.8461 11.7096 22.4131C14.2972 21.5506 17.9354 21 22 21C26.0646 21 29.7028 21.5506 32.2904 22.4131C33.5894 22.8461 34.5685 23.3397 35.2023 23.8392C35.8473 24.3476 36 24.7474 36 25Z"  strokeWidth="2" className="svg-elem-1"></path>
                    
                    <path d="M59.79 33.09V34H51.53V33.09L53.455 32.88C53.8283 32.8333 54.05 32.74 54.12 32.6C54.19 32.46 54.225 31.9817 54.225 31.165V22.45C54.225 20.7233 53.945 19.51 53.385 18.81C52.825 18.0867 52.02 17.725 50.97 17.725C50.2 17.725 49.3483 17.9583 48.415 18.425C47.4817 18.8917 46.6067 19.8017 45.79 21.155V31.165C45.79 31.9817 45.825 32.46 45.895 32.6C45.965 32.74 46.1867 32.8333 46.56 32.88L48.485 33.09V34H40.225V33.09L42.15 32.88C42.5233 32.8333 42.745 32.74 42.815 32.6C42.885 32.46 42.92 31.9817 42.92 31.165V19.51C42.92 18.6933 42.885 18.215 42.815 18.075C42.745 17.935 42.5233 17.8417 42.15 17.795L40.225 17.62V16.675H45.615V19.51C46.455 18.39 47.4 17.585 48.45 17.095C49.5233 16.5817 50.5967 16.325 51.67 16.325C53.3967 16.325 54.7267 16.8617 55.66 17.935C56.6167 18.985 57.095 20.4783 57.095 22.415V31.165C57.095 31.9817 57.13 32.46 57.2 32.6C57.27 32.74 57.4917 32.8333 57.865 32.88L59.79 33.09ZM76.7366 30.01C76.3166 31.5967 75.5232 32.7167 74.3566 33.37C73.2132 34.0233 71.9416 34.35 70.5416 34.35C67.9516 34.35 66.0149 33.5683 64.7316 32.005C63.4482 30.4183 62.8066 28.3067 62.8066 25.67V24.97C62.8066 22.3567 63.4249 20.2683 64.6616 18.705C65.8982 17.1183 67.6949 16.325 70.0516 16.325C71.3116 16.325 72.4549 16.5817 73.4816 17.095C74.5316 17.6083 75.3599 18.3667 75.9666 19.37C76.5966 20.3733 76.9116 21.6217 76.9116 23.115C76.9116 23.815 76.8416 24.55 76.7016 25.32H65.9566V26.37C65.9566 28.82 66.3299 30.5817 67.0766 31.655C67.8466 32.705 69.0832 33.23 70.7866 33.23C71.8599 33.23 72.7466 32.95 73.4466 32.39C74.1699 31.83 74.6482 30.8617 74.8816 29.485L76.7366 30.01ZM70.0516 17.445C68.6749 17.445 67.6482 17.97 66.9716 19.02C66.2949 20.07 65.9566 21.7967 65.9566 24.2H73.8316V24.095C73.8782 23.7917 73.9132 23.5 73.9366 23.22C73.9599 22.9167 73.9716 22.6483 73.9716 22.415C73.9716 20.665 73.6099 19.405 72.8866 18.635C72.1632 17.8417 71.2182 17.445 70.0516 17.445ZM91.7652 30.43C91.4152 31.7833 90.8669 32.775 90.1202 33.405C89.3736 34.035 88.4169 34.35 87.2502 34.35C86.1302 34.35 85.2202 34.105 84.5202 33.615C83.8202 33.1017 83.3069 32.4367 82.9802 31.62C82.6536 30.8033 82.4902 29.9517 82.4902 29.065V19.51C82.4902 18.6933 82.4552 18.215 82.3852 18.075C82.3386 17.935 82.1169 17.8417 81.7202 17.795L79.7952 17.62V16.675H82.4902V12.09L85.3602 11.495V16.675H91.0652V17.795H85.3602V29.345C85.3602 30.815 85.5586 31.83 85.9552 32.39C86.3752 32.95 86.9236 33.23 87.6002 33.23C88.2769 33.23 88.7902 32.9733 89.1402 32.46C89.5136 31.9467 89.7819 31.1067 89.9452 29.94L91.7652 30.43ZM105.3 30.43C104.95 31.7833 104.402 32.775 103.655 33.405C102.909 34.035 101.952 34.35 100.785 34.35C99.6654 34.35 98.7554 34.105 98.0554 33.615C97.3554 33.1017 96.8421 32.4367 96.5154 31.62C96.1887 30.8033 96.0254 29.9517 96.0254 29.065V19.51C96.0254 18.6933 95.9904 18.215 95.9204 18.075C95.8737 17.935 95.6521 17.8417 95.2554 17.795L93.3304 17.62V16.675H96.0254V12.09L98.8954 11.495V16.675H104.6V17.795H98.8954V29.345C98.8954 30.815 99.0937 31.83 99.4904 32.39C99.9104 32.95 100.459 33.23 101.135 33.23C101.812 33.23 102.325 32.9733 102.675 32.46C103.049 31.9467 103.317 31.1067 103.48 29.94L105.3 30.43Z" fill="#1881CC" className="svg-elem-2" ></path>
                    
                    <path d="M39 38.095H106.07V40.37H39V38.095Z" fill="#1881CC" className="svg-elem-3"></path>
                    
                    <path d="M137.95 33.09V34H132.56V31.2C131.743 32.2967 130.81 33.1017 129.76 33.615C128.733 34.105 127.707 34.35 126.68 34.35C125.023 34.35 123.728 33.825 122.795 32.775C121.885 31.7017 121.43 30.1967 121.43 28.26V19.51C121.43 18.6933 121.395 18.215 121.325 18.075C121.255 17.935 121.033 17.8417 120.66 17.795L118.735 17.62V16.675H124.3V28.225C124.3 29.9517 124.557 31.1767 125.07 31.9C125.607 32.6 126.377 32.95 127.38 32.95C128.127 32.95 128.943 32.7167 129.83 32.25C130.74 31.7833 131.592 30.885 132.385 29.555V19.51C132.385 18.6933 132.35 18.215 132.28 18.075C132.21 17.9117 131.988 17.8183 131.615 17.795L128.99 17.62V16.675H135.255V31.165C135.255 31.9817 135.29 32.46 135.36 32.6C135.43 32.74 135.652 32.8333 136.025 32.88L137.95 33.09ZM159.742 33.09V34H151.482V33.09L153.407 32.88C153.78 32.8333 154.002 32.74 154.072 32.6C154.142 32.46 154.177 31.9817 154.177 31.165V22.45C154.177 20.7233 153.897 19.51 153.337 18.81C152.777 18.0867 151.972 17.725 150.922 17.725C150.152 17.725 149.3 17.9583 148.367 18.425C147.434 18.8917 146.559 19.8017 145.742 21.155V31.165C145.742 31.9817 145.777 32.46 145.847 32.6C145.917 32.74 146.139 32.8333 146.512 32.88L148.437 33.09V34H140.177V33.09L142.102 32.88C142.475 32.8333 142.697 32.74 142.767 32.6C142.837 32.46 142.872 31.9817 142.872 31.165V19.51C142.872 18.6933 142.837 18.215 142.767 18.075C142.697 17.935 142.475 17.8417 142.102 17.795L140.177 17.62V16.675H145.567V19.51C146.407 18.39 147.352 17.585 148.402 17.095C149.475 16.5817 150.549 16.325 151.622 16.325C153.349 16.325 154.679 16.8617 155.612 17.935C156.569 18.985 157.047 20.4783 157.047 22.415V31.165C157.047 31.9817 157.082 32.46 157.152 32.6C157.222 32.74 157.444 32.8333 157.817 32.88L159.742 33.09ZM165.874 12.755C165.314 12.755 164.847 12.58 164.474 12.23C164.124 11.8567 163.949 11.3783 163.949 10.795C163.949 10.235 164.124 9.78 164.474 9.43C164.847 9.08 165.314 8.905 165.874 8.905C166.434 8.905 166.889 9.08 167.239 9.43C167.612 9.78 167.799 10.235 167.799 10.795C167.799 11.3783 167.612 11.8567 167.239 12.23C166.889 12.58 166.434 12.755 165.874 12.755ZM161.779 17.62V16.675H167.344V31.165C167.344 31.9817 167.379 32.46 167.449 32.6C167.519 32.74 167.74 32.8333 168.114 32.88L170.039 33.09V34H161.779V33.09L163.704 32.88C164.077 32.8333 164.299 32.74 164.369 32.6C164.439 32.46 164.474 31.9817 164.474 31.165V19.51C164.474 18.6933 164.439 18.215 164.369 18.075C164.299 17.935 164.077 17.8417 163.704 17.795L161.779 17.62Z" fill="#1881CC" className="svg-elem-4"></path>
                    
                    <path d="M118 38.095H171.019V40.37H118V38.095Z" fill="#1881CC" className="svg-elem-5"></path>
                    <path d="M22.704 1.12015C21.6063 1.35976 20.4597 2.131 19.2095 3.48629C17.0873 5.80002 16.2274 9.43909 15.2089 20.4237C14.9894 22.7299 14.6845 26.6386 14.593 28.211C14.4161 31.2436 13.4038 39.6299 13.0379 41.0451C12.4463 43.3364 11.4645 44.7441 9.83616 45.6201C9.31169 45.9047 9.2568 45.9047 9.37267 45.6351C9.59832 45.0885 9.61052 44.16 9.39097 43.6284C9.07995 42.8721 8.24445 42.1683 7.54313 42.0559C6.69543 41.9287 5.59771 42.6475 5.17081 43.6059C5.03664 43.9204 5.00005 44.0926 5.00005 44.4895C4.99395 45.4479 5.51842 46.2117 6.57346 46.7733C6.99426 47.0054 7.00646 47.0054 8.00661 46.9979C8.8726 46.9829 9.09824 46.9605 9.61052 46.7882C11.3242 46.2416 13.5014 44.0926 14.2881 42.1758C15.1784 40.0043 15.7944 36.9418 16.325 32.0298C16.4652 30.7643 16.5628 29.8059 17.0324 25.141C17.2458 23.0294 17.5142 20.0793 17.5812 19.0759C17.7825 16.0433 18.6119 8.3908 18.8619 7.30507C19.4291 4.79666 20.5085 3.20925 22.271 2.30322C22.4844 2.19839 22.6674 2.12351 22.6857 2.14598C22.6979 2.16095 22.6674 2.27327 22.6064 2.38559C22.4296 2.70756 22.4113 3.86068 22.5637 4.30246C22.8564 5.11115 23.57 5.74012 24.3994 5.9348C24.9726 6.0621 25.8264 5.68022 26.3753 5.05124C27.351 3.92807 27.1681 2.47544 25.9362 1.55444C25.3324 1.10517 24.9482 0.992857 24.0335 1.00034C23.5883 1.00034 22.9906 1.06025 22.704 1.12015Z" className="svg-elem-6"></path>
                    
                    <path d="M34.704 1.12015C33.6063 1.35976 32.4597 2.131 31.2095 3.48629C29.0873 5.80002 28.2274 9.43909 27.2089 20.4237C26.9894 22.7299 26.6845 26.6386 26.593 28.211C26.4161 31.2436 25.4038 39.6299 25.0379 41.0451C24.4463 43.3364 23.4645 44.7441 21.8362 45.6201C21.3117 45.9047 21.2568 45.9047 21.3727 45.6351C21.5983 45.0885 21.6105 44.16 21.391 43.6284C21.0799 42.8721 20.2445 42.1683 19.5431 42.0559C18.6954 41.9287 17.5977 42.6475 17.1708 43.6059C17.0366 43.9204 17.0001 44.0926 17.0001 44.4895C16.994 45.4479 17.5184 46.2117 18.5735 46.7733C18.9943 47.0054 19.0065 47.0054 20.0066 46.9979C20.8726 46.9829 21.0982 46.9605 21.6105 46.7882C23.3242 46.2416 25.5014 44.0926 26.2881 42.1758C27.1784 40.0043 27.7944 36.9418 28.325 32.0298C28.4652 30.7643 28.5628 29.8059 29.0324 25.141C29.2458 23.0294 29.5142 20.0793 29.5812 19.0759C29.7825 16.0433 30.6119 8.3908 30.8619 7.30507C31.4291 4.79666 32.5085 3.20925 34.271 2.30322C34.4844 2.19839 34.6674 2.12351 34.6857 2.14598C34.6979 2.16095 34.6674 2.27327 34.6064 2.38559C34.4296 2.70756 34.4113 3.86068 34.5637 4.30246C34.8564 5.11115 35.57 5.74012 36.3994 5.9348C36.9726 6.0621 37.8264 5.68022 38.3753 5.05124C39.351 3.92807 39.1681 2.47544 37.9362 1.55444C37.3324 1.10517 36.9482 0.992857 36.0335 1.00034C35.5883 1.00034 34.9906 1.06025 34.704 1.12015Z" className="svg-elem-7"></path>
                    <path d="M118 25.5L109 28.5311V22.4689L118 25.5Z" fill="#1881CC" className="svg-elem-8"></path>
                </svg>
            </div>
            
            <div className="navbar-right">

                <div className="burger-meny-div" onClick={()=>{setvis_burger(!vis_burger)}}  style={brgr_anim}>
                    <div className="burger-meny">
                        <svg className="burger-meny svg" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="9" width="40" height="6" rx="2" fill="#166FAE"/>
                            <rect x="5" y="20" width="40" height="6" rx="3" fill="#166FAE"/>
                            <rect x="5" y="34" width="40" height="6" rx="4" fill="#166FAE"/>
                        </svg>
                    </div>
                </div>

                <div className="navlist">

                    <div className="navelem courses">
                        <p className="nav-text">courses</p>
                        
                        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="pil_ned-svg">
                            <path d="M8 13L3.66987 1.75L12.3301 1.75L8 13Z" className="pil_ned pil-courses"/>
                        </svg>

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="hover-rect-svg">
                            <path d="M13.5755 4.31773C14.0286 2.94433 15.9714 2.94433 16.4245 4.31772L23.0103 24.28C23.3305 25.2505 22.6078 26.25 21.5859 26.25H8.41414C7.39225 26.25 6.6695 25.2505 6.98966 24.28L13.5755 4.31773Z" className="hover-rect"/>
                        </svg>
                        <div className="hover-sec hover-sec-courses">
                            <div className="courses-elem">
                                <p className="courses-elem-text">math</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">physics</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">chemistry</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">engineering</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">CS & IT</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">biology</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">medicine</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">economics</p>
                            </div>
                            <div className="courses-elem">
                            <p className="courses-elem-text">other</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="navelem students">
                    <p className="nav-text">students</p>
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="pil_ned-svg">
                            <path d="M8 13L3.66987 1.75L12.3301 1.75L8 13Z" className="pil_ned pil-students"/>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="hover-rect-svg">
                        <path d="M13.5755 4.31773C14.0286 2.94433 15.9714 2.94433 16.4245 4.31772L23.0103 24.28C23.3305 25.2505 22.6078 26.25 21.5859 26.25H8.41414C7.39225 26.25 6.6695 25.2505 6.98966 24.28L13.5755 4.31773Z" className="hover-rect"/>
                    </svg>
                    <div className="hover-sec hover-sec-students">
                        <div className="students-elem">
                            <p className="students-elem-text">buying courses</p>
                        </div>
                        <div className="students-elem">
                            <p className="students-elem-text">sertificates</p>
                        </div>
                        <div className="students-elem">
                            <p className="students-elem-text">course structure</p>
                        </div>
                        <div className="students-elem">
                            <p className="students-elem-text">problems and solutions</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="navelem tutors">
                    <p className="nav-text">tutors</p>
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="pil_ned-svg">
                            <path d="M8 13L3.66987 1.75L12.3301 1.75L8 13Z" className="pil_ned pil-tutors"/>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="hover-rect-svg">
                        <path d="M13.5755 4.31773C14.0286 2.94433 15.9714 2.94433 16.4245 4.31772L23.0103 24.28C23.3305 25.2505 22.6078 26.25 21.5859 26.25H8.41414C7.39225 26.25 6.6695 25.2505 6.98966 24.28L13.5755 4.31773Z" className="hover-rect"/>
                    </svg>
                    <div className="hover-sec hover-sec-tutors">
                        <div className="tutors-elem">
                            <p className="tutors-elem-text">creating courses</p>
                        </div>
                        <div className="tutors-elem">
                            <p className="tutors-elem-text">earnings and payments</p>
                        </div>
                        <div className="tutors-elem">
                            <p className="tutors-elem-text">requirements</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="login-signup-btn-nav">
                    <div className="login-signup-btn-nav-box" onClick={()=>{
                        setlogin(true)
                    }}>
                        <p className="login-signup-btn-nav-text">Login / Signup</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="burger-meny-nav" style={brgr_style}>
            <div className="empty"></div>
            
            <div className="burger-navelem burger-courses">
                
                <div className="burger-nav-text-div">
                    <p className="burger-nav-text">courses &nbsp; &gt; </p>
                </div>

                <div className="burger-hover-sec burger-hover-sec-courses">
                    <div className="empty-courses-elem"></div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">math</p>
                        </div>
                    </div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">physics</p>
                        </div>
                    </div>
    
                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">chemistry</p>
                        </div>
                    </div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">engineering</p>
                        </div>
                    </div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">CS & IT</p>
                        </div>
                    </div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">biology</p>
                        </div>
                    </div>

                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">medicine</p>
                        </div>
                    </div>
                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">economics</p>
                        </div>
                    </div>
                    <div className="burger-courses-elem">
                        <div className="burger-text-div">
                            <p className="burger-courses-elem-text">other</p>
                        </div>
                    </div>
        
                </div>

            </div>

            <div className="burger-navelem burger-students">

                <div className="burger-nav-text-div">
                    <p className="burger-nav-text">students &nbsp; &gt; </p>
                </div>

                <div className="burger-hover-sec burger-hover-sec-students">
                    
                    <div className="empty-students-elem"></div>

                    <div className="burger-students-elem">
                        <div className="burger-text-div">
                            <p className="burger-students-elem-text">buying courses</p>
                        </div>
                    </div>

                    <div className="burger-students-elem">
                        <div className="burger-text-div">
                            <p className="burger-students-elem-text">Sertificates</p>
                        </div>
                    </div>

                    <div className="burger-students-elem">
                        <div className="burger-text-div">
                            <p className="burger-students-elem-text">Course structure</p>
                        </div>
                    </div>

                    <div className="burger-students-elem">
                        <div className="burger-text-div">
                            <p className="burger-students-elem-text">Problems and solutions</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="burger-navelem burger-tutors">

                <div className="burger-nav-text-div">
                    <p className="burger-nav-text">tutors &nbsp; &gt; </p>
                </div>

                <div className="burger-hover-sec burger-hover-sec-tutors">
                    <div className="empty-tutors-elem"></div>

                    <div className="burger-tutors-elem">
                        <div className="burger-text-div">
                            <p className="burger-tutors-elem-text">Creating courses</p>
                        </div>
                    </div>

                    <div className="burger-tutors-elem">
                        <div className="burger-text-div">
                            <p className="burger-tutors-elem-text">Earnings and payment</p>
                        </div>
                    </div>

                    <div className="burger-tutors-elem">
                        <div className="burger-text-div">
                            <p className="burger-tutors-elem-text">Requirements</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    
    </div>
}