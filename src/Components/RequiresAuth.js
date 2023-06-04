import { useAuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({children}) => {
    const {token} = useAuthContext();
    console.log(token)
    const location = useLocation();

    return token ? children : <Navigate to="/login" state={{from: location}}/>
}

export default RequiresAuth;