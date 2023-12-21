import React from "react";
import "../css/Dropdown.css";
import { Avatar } from "@mui/material";
import Crop32RoundedIcon from "@mui/icons-material/Crop32Rounded";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";

function ProfileDropdown() {
  const dispatch = useDispatch();
  function Signout() {
    dispatch(logOutUser());
  }
  return (
    <div className="dropdown">
      <div className="dropdownlogo">
        <Avatar />
      </div>
      <div className="userinfo">
        <h4>Abhishek Upadhyay</h4>
        <p>Frontend Developer</p>
      </div>
      <div className="viewprofile">
        <p>View Profile</p>
      </div>
      <div
        style={{ marginTop: "5px", marginBottom: "5px" }}
        className="app-hr-line"
      ></div>
      <div className="account">
        <p>
          {" "}
          <Crop32RoundedIcon
            style={{
              backgroundColor: "goldenrod",
              fontSize: "1em",
              color: "goldenrod",
              margin: "2px",
            }}
          />
          Try Premium for free
        </p>
        <p>Setting & Privacy</p>
        <p>Help</p>
        <p>Language</p>
      </div>
      <div
        style={{ marginTop: "5px", marginBottom: "5px" }}
        className="app-hr-line"
      ></div>
      <div className="manage">
        <h4>Manage</h4>
        <p>Post & Activity</p>
        <p>Job Posting Account</p>
      </div>
      <div
        style={{ marginTop: "8px", marginBottom: "5px" }}
        className="app-hr-line"
      ></div>
      <div className="signout" onClick={Signout}>
        <p>Sign Out</p>
      </div>
    </div>
  );
}

export default ProfileDropdown;
