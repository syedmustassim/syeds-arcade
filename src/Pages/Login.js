import { Link, useLocation, useNavigate } from "react-router-dom";
import {useState} from "react"

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { useAuthContext } from "../Context/AuthContext";

import './Login.css'


const Login = () => {

    const [userData, setUserData] = useState({
        email: " ",
        password: " "
    })

    const {setToken, setProfile, profile} = useAuthContext();

    const navigate = useNavigate();
    const location = useLocation();

    const handleGuestLogin = async () => {
        const creds = {
            email: "smustassim@gmail.com",
            password: "syed1410"
        }

        const response = await fetch('/api/auth/login',{
            method: "POST",
            body: JSON.stringify(creds),
        })

        const data = await response?.json();

        if(data.encodedToken){
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("user", JSON.stringify(data.foundUser));
            navigate('/profile')
            setToken(data.encodedToken);
            setProfile({
                ...profile,
                firstName: data.foundUser.firstName,
                lastName: data.foundUser.lastName,
                email: data.foundUser.email,
            })

        }
    }

    const handleLogin = async() => {
        const response = await fetch("/api/auth/login",{
            method: "POST",
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            })
        })

        const data = await response?.json();
        console.log(data, "oenoienf");

        localStorage.setItem("token", data.encodedToken)
        localStorage.setItem("user", JSON.stringify(data.foundUser))
        navigate("/profile")
        setToken(data.encodedToken)
        setProfile({
            ...profile,
            firstName: data.foundUser.firstName,
            lastName: data.foundUser.lastName,
            email: data.foundUser.email,
        })
    }
    
    return(
        <div>
            <Navbar/>
            <div className="login-container">
                <div className="login-form-container">
                <h1 className="login-heading"> Login Page </h1>
                <div className="login-second-container">
                    <div className="login-text-field">
                        <input type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                        <span></span>
                        <label> Email Address</label>
                    </div>  
                    <div className="login-text-field">              
                        <input type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value}) }/>
                        <span></span>
                        <label>Password</label>
                    </div>
               
                    <button onClick={handleLogin} className="login-btn-main">Log in</button>
                    <button onClick={handleGuestLogin} className="login-guest-btn">Guest login</button>
            
                   
                    <div className="login-last-container">
                        <Link to="/signup" style={{textDecoration: "none"}}> <h4>Don't have an account? Sign up here</h4></Link>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;
