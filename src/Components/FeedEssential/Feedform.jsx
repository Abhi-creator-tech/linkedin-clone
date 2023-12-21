import React, { useState } from "react";
import { Avatar } from "@mui/material";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "../../css/Feed.css";
import useApi from "../../Hooks/useApi";
import Modal from "@mui/material/Modal";
import PostModal from "./PostModal";

function Feedform({ setRefresh }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="feed_input">
      <div className="feed_form">
        <Avatar />
        <form>
          <input type="text" placeholder="Start a post" onClick={handleOpen} />
          <input type="submit" />
        </form>
      </div>
      <div className="feed_options">
        <div className="option">
          <PhotoSizeSelectActualIcon style={{ color: "#70b5f9" }} />
          <span>Media</span>
        </div>
        <div className="option">
          <CalendarMonthIcon style={{ color: "#e7a33e" }} />
          <span>Event</span>
        </div>
        <div className="option">
          <AssignmentIcon style={{ color: "#fc9295" }} />
          <span>Write Article</span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PostModal handleClose={handleClose} setRefresh={setRefresh} />
      </Modal>
    </div>
  );
}

export default Feedform;
