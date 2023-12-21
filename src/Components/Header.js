import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "..//css/Header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import ProfileDropdown from "./ProfileDropdown";
const Header = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="headerWrapper">
      <div className="container header">
        <div className="header_left">
          <div className="header_logo">
            <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" />
          </div>
          <div className="header_search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={PeopleIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOptions Icon={MessageIcon} title="Messaging" />
          <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications" />
          <div className="avatarWrapper">
            <HeaderOptions setExpand={setExpand} avatar={Avatar} title="Me" />
            {expand && <ProfileDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
