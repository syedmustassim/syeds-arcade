import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext"
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const SignUp = () => {
    const {profile, setProfile, setToken, signUpData, setSignUpData} = useAuthContext();

    const navigate = useNavigate();

    const handleInput = (e,fieldName) => {
        const {value} = e.target;
        setSignUpData((prev) => ({
            ...prev, 
            [fieldName]: value,
        }))
    }

    const handleSignUp = async () => {
        if(signUpData.password === signUpData.confirmPassword){
            try{
                const response = await fetch("/api/auth/signup",{
                    method: "POST",
                    body: JSON.stringify({
                        firstName: signUpData.name,
                        lastName: signUpData.name,
                        email: signUpData.email,
                        password: signUpData.password,
                    })
                });

                const data = await response.json();
                localStorage.setItem("token", data.encodedToken);
                localStorage.setItem("user", JSON.stringify(data.createdUser));
                setToken(data.encodedToken);
                navigate("/")

                setProfile({
                    ...profile,
                    firstName: data.createdUser.firstName,
                    lastName: data.createdUser.lastName,
                    email: data.createdUser.email,
                })
            }catch(error){
                alert(error)
            }
        }
        else{
            alert("Passwords do not match. Please try again.")
        }
    }

    return(
        <div>
            <Navbar/>
            <div >
                <h1> Sign Up </h1>
                <label>Name</label>
                <input value={signUpData.name} type="text" placeholder="Bruce Wayne" onChange={(e) => handleInput(e, "name")}/>
                <label>Email address</label>
                <input value={signUpData.email} type="email" placeholder="xyz@abc.com" onChange={(e) => handleInput(e, "email")} />
                <label>Password</label>
                <input value={signUpData.password} type="password" placeholder="*******" onChange={(e) => handleInput(e, "password")} />
                <label>Confirm Password</label>
                <input value={signUpData.confirmPassword} type="password" placeholder="*******" onChange={(e) => handleInput(e, "confirmPassword")}/>

                <div>
                    <button onClick={handleSignUp}>Create new Account</button>
                </div>

                <div>
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SignUp;