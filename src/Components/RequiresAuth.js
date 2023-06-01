import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);
    const location = useLocation();

    return isLoggedIn ? children : <Navigate to="/login" state={{from: location}}/>
}

export default RequiresAuth;