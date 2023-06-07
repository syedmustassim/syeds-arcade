import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

import "./Profile.css";

export const ProfileInfo = () => {
  const { profile, setToken } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setToken("");
    toast.success("Logged out successfully!");
  };

  return (
    <div className="profile-details-container">
      <div className="profile-details-item">
        <h1 className="profile-details-item-label">Name: </h1>
        <h1>{profile.firstName}</h1>
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
  );
};
