import React, { useState } from "react";
//import { FaFacebook, FaGoogle, IconName } from "react-icons/fa6";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './login2.css'

const Login2 = () => {

    const [popupStyle, showPopup] = useState("hide")


    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)

    }
    return (
        <div style={{ backgroundImage: "url(OIP.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover" }}>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div className="cover">
                    <h1 style={{ color: "white" }}>Login</h1>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <div className="login-btn" onClick={popup}>Login</div>
                    <p className="text" style={{ color: "white" }}>New account</p>

                    <Link className="login-btn" to="/login">Signup </Link>

                    <div className="alt-login">
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login2