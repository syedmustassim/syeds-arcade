import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import './Login.css'
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
        navigate(location?.state?.from?.pathname);
    }

    
    return(
        <div>
            <Navbar/>
            <div className="login-container">
                {isLoggedIn ? "" : <h1> Please login to continue</h1>}
                <h1 className="login-heading"> Login Page </h1>
                <form>
                    <h3 className="login-email"> Email: <input  /></h3>
                    <h3 className="login-password"> Password: <input /></h3>
                    <button className="login-btn" onClick={handleLogin}>Sign in</button>
                </form>
                <NavLink> <h4>Don't have an account? Sign up here</h4></NavLink>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;