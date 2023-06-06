import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext"
import './Profile.css'

export const ProfileInfo = () => {
    const {profile, setToken} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = ()  => {
        localStorage.clear();
        navigate("/");
        setToken("");
    }

    return(
        <div className="profile-details-container">
        <div className="profile-details-item">
          <h1 className="profile-details-item-label">Name: </h1>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
        </div>
  
        <div className="profile-details-item">
          <h2 className="profile-details-item-label">Email: </h2>
          <h2>{profile.email}</h2>
        </div>
        <div className="profile-details-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
}