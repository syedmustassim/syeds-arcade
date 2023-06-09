import './Navbar.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTime, faBar} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../Context/AuthContext';

export const Navbar = () => {
    let logoIcon = require('../Images/syed-arcade.png');

    const [isMobile, setIsMobile] = useState(false);
    const {token} = useAuthContext();

    const hamburgerHandler = () => {
        
    }

    return(
        <nav className="navbar"> 
            <img src={logoIcon} alt="logo" className="nav-logo" />
            {/* <input placeholder='Search' className="nav-search"/>
            <button className="nav-btn"> Search</button> */}
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                <Link to="/" className="home">
                    <li> Home </li>
                </Link>
                <Link to="/discover" className="discover">
                    <li> Discover </li>
                </Link>
                <Link to="/cart" className="cart">
                    <li> Cart </li>
                </Link>
                <Link to="/wishlist" className="wishlist">
                    <li> Wishlist </li>
                </Link>
                
                {
                    token ? <Link to="/profile/profile-info" className='sign-in'><li> Profile </li></Link>:
                
                <Link to="/login" className="sign-in">
                    <li> Sign In </li>
                </Link>}    
            </ul>
        <button className="mobile-menu-icon" onClick={hamburgerHandler}> {isMobile ? "cross" : "hamburger"}</button>
        </nav>
    )
}