import React from "react";
import "../../styles/signup.css"

export default function Signup({signup, setlogin,setsignup,setdisplay_login}){
    const display= signup ? "grid" : "none" ;
    return <div className="signup-div" style={{display:display}}>
        <div className="kryss" onClick={()=>{
            setlogin(false); setsignup(false); setdisplay_login("grid")
        }}>X</div>

        <div className="signup-header">
            <div className="signup-header-div">
                <h2 className="signup-header-text">Signup</h2>
            </div>
        </div>

        <div className="signup-input">
            <div className="signup-username-div">
            <input type="text" placeholder="username" className="signup-username"/>
            </div>

            <div className="signup-email-div">
                <input type="email" placeholder="email" className="signup-email"/>
            </div>
            
            <div className="signup-password-div">
                <input type="password" placeholder="password"className="signup-password"/>
            </div>

            <div className="signup-confirm-password-div">
                <input type="password" placeholder="confirm password"className="signup-confirm-password"/>
            </div>
            
            <div className="signup-btn-div">
                <div className="signup-btn">
                    <p className="signup-btn-text">Signup</p>
                </div>
            </div>
        </div>
    </div>
}