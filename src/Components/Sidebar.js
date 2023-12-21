import React from "react";
import "../css/Sidebar.css";
import { Avatar } from "@mui/material";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import Crop32RoundedIcon from "@mui/icons-material/Crop32Rounded";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img src="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=" />
        <div className="profile_details">
          <Avatar />
          <h4>Abhishek Upadhyay</h4>
          <p>Web Developer</p>
        </div>
        <div className="connections">
          <div className="connectionOne">
            <span>Connections</span>
            <span>9</span>
          </div>
          <div className="connectionTwo">
            <span>Connect with Alumni</span>
          </div>
        </div>
        <div
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="app-hr-line"
        ></div>
        <div className="exclusive-content-home">
          <p>Access exclusive tools & insights</p>
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
        </div>
        <div
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="app-hr-line"
        ></div>
        <div className="exclusive-content-home">
          <p></p>
          <p>
            {" "}
            <BookmarkRoundedIcon
              style={{ fontSize: "1.5em", marginRight: "2px" }}
            />
            My Items
          </p>
        </div>
      </div>
      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>careers
        </p>
        <p className="hash">
          <span>#</span>publishing
        </p>
        <p className="hash">
          <span>#</span>psychology
        </p>
        <p className="hash">
          <span>#</span>musicindustry
        </p>
        <p className="hash">
          <span>#</span>sales
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
