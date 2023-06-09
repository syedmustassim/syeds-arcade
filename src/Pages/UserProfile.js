import { Route, Routes } from "react-router-dom";
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { ProfileNavbar } from "../Components/ProfileNavbar";
import { ProfileInfo } from "../Components/ProfileInfo";
import { Address } from "../Components/Address";
import '../Components/Profile.css'

const UserProfile = () => {
    return(
        <div>
            <Navbar/>
            <div className="main-profile">
                <ProfileNavbar/>
                <Routes>
                    <Route path="profile-info" element={<ProfileInfo/>}></Route>
                </Routes>
                <Routes>
                    <Route path="address" element={<Address />}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    )

}

export default UserProfile;