import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { useAuthContext } from "../Context/AuthContext"

export const ProfileInfo = () => {
    const {profile, setToken} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = ()  => {
        localStorage.clear();
        navigate("/");
        setToken("");
    }

    return(
        <div>
            <div>
                <h1> Name: {profile.firstName} {profile.lastName}</h1>
                <h1> Email: {profile.email} </h1>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}