import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const encodedToken = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")) || "";

    const [token, setToken] = useState(encodedToken);
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [profile, setProfile] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    })

    return <AuthContext.Provider value={{token,setToken,signUpData,setSignUpData, profile, setProfile }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider;