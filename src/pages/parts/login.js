import React from "react";
import "../../styles/login.css"
import Signup from "./signup"
import {useState} from "react";

export default function Login({login, signup, setlogin, setsignup}){
    const display= login ? "grid" : "none" ;
    const [display_login, setdisplay_login]=useState("grid")

    return <div className="login" style={{display:display}} >
        <Signup signup={signup} setlogin={setlogin}  setsignup={setsignup} setdisplay_login={setdisplay_login} />
        <div className="login-div" style={{display:display_login}}>

            <div className="kryss" onClick={()=>{
                setlogin(false); setsignup(false); setdisplay_login("false")
            }}>X</div>
            
            <div className="login-header">
                <h3 className="login-header-text">Login</h3>
            </div>

            <div className="login-input">
                <input type="text" placeholder="username" className="username"/>
                <input type="password" placeholder="password"className="password"/>
                <div className="login-input-btn">
                    <p className="login-input-btn-text">Login</p>
                </div>
            </div>
            <div className="login-forgot">
                <div className="login-forgot-div">
                    <p className="login-forgot-text">forgot username or password?</p>
                </div>
            </div>

            <div className="login-google">
                <div className="login-google-btn">
                    <div className="login-google-img-div">
                        <img src={require('../../bilder/google.png')} alt="google image" className="login-google-img"/>
                    </div>
                    <p className="login-google-text">Login with google</p>
                </div>
            </div>

            <div className="login-signup">
                <div className="login-signup-btn" onClick={()=>{
                    setsignup(true); setdisplay_login("none")
                }}>
                    <p className="login-signup-btn-text">Signup</p>
                </div>
            </div>
        </div>
    </div>
}