import React,{useState} from "react";
import { FaFacebook, FaGoogle, IconName } from "react-icons/fa6";
import './login2.css'


const  Login2 = () => {

    const[popupStyle,showPopup]= useState("hide")


    const popup = () => {
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)

    }
    return(
        <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <div className="login-btn" onClick={popup}>Login</div>
        <p className="text">Forget Password</p>
        
        <div className="alt-login">

        <div className="facebook"><FaFacebook size={50} style={{color:"white"}}/></div>
        <div className="google"><FaGoogle size={50} style={{color:"white"}}/></div>        
        </div>

        
        </div>
    )
}

export default Login2