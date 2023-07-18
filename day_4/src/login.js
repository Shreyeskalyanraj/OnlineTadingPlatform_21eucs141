import React, { useState } from "react";
import { FaFacebook, FaGoogle, IconName } from "react-icons/fa6";
import './login2.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Login = () => {

    const [popupStyle, showPopup] = useState("hide")


    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)

    }
    return (
        <div style={{ backgroundImage: "url(OIP.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover" }}>
        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                <div className="cover">
                    <h1 style={{color:"white"}}>Register</h1>
                    <input type="text" placeholder="username" />
                    <br></br>
                    <input type="text2" placeholder="lastname"/>
                    <br></br>
                    <input type="text3" placeholder="email"/>
                    <br></br>
                    <input type="password" placeholder="password" />
                    <br>
                    </br>
                    <input type="retype-password" placeholder="retype-password"/>
                    <br></br>
                    <Link className="login-btn2" to="/home">Create Account</Link>
                  
                    
                    <div className="alt-login">


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login