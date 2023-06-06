import { useState } from "react"
import {NavLink, useLocation} from "react-router-dom"
import './Profile.css'

export const ProfileNavbar = () =>{

    const [color, setColor] = useState({
        profileInfo: true, 
        address: false
    })

    const location = useLocation();
    return(
        
    <div className="profile-navbar">
        <NavLink
        style={
          location.pathname === "/profile/profile-info"
            ? { backgroundColor: "#b468fa" }
            : {}
        }
        className="profile-nav-item nav-link-item"
        to="/profile/profile-info"
        onClick={() =>
          setColor({ profileInfo: true, address: false, })
            }
        >
        Profile Information
      </NavLink>
    
      <NavLink
        style={
          location.pathname === "/profile/address"
            ? { backgroundColor: "#b468fa" }
            : {}
        }
        className="profile-nav-item nav-link-item"
        to="/profile/address"
        onClick={() =>
          setColor({ profileInfo: false, address: true,})
        }
      >
        Addresses
      </NavLink>
    
    </div>

    )
 

}