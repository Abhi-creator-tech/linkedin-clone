import React from "react";
import "../css/Header.css";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function HeaderOptions({ Icon, title, avatar, setExpand }) {
  const handleClick = () => {
    if (avatar) setExpand((prev) => !prev);
  };
  return (
    <div className="header_options" onClick={handleClick}>
      {Icon && <Icon></Icon>}
      {avatar && <Avatar name={avatar} />}
      <div className="headerOptionsTitle">
        <span>{title}</span>

        {avatar && <ArrowDropDownIcon />}
      </div>
    </div>
  );
}

export default HeaderOptions;
