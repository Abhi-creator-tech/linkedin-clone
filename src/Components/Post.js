import React, { useState } from "react";
import "../css/Post.css";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import AutorenewSharpIcon from "@mui/icons-material/AutorenewSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useApi from "../Hooks/useApi";

function Post(props) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  function toggleLike() {
    setLiked(!liked);
  }
  const { user } = useSelector((state) => state.auth);
  const { Delete } = useApi();

  let { _id, author, channel, commentCount, likeCount, content, setRefresh } =
    props;
  if (author === user._id) {
    author = {};
    author.name = user.name;
    author._id = user._id;
    author.profileImage = user.profileImage;
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deletePost = async () => {
    await Delete(`/linkedin/post/${_id}`);
    handleClose();
    setRefresh(Math.random() * Date.now());
  };
  return (
    <div className="postContainer">
      {/* <div
        style={{ marginTop: "5px", marginBottom: "5px" }}
        className="app-hr-line"
      ></div> */}
      <div className="userPostDetails">
        <div className="profileDetails">
          <div className="userPostDetailsImg">
            {author?.profileImage ? (
              <img src={author?.profileImage} alt={author?.name} />
            ) : (
              <Avatar />
            )}
          </div>

          <div className="userPostMainDetails">
            <span className="userDetailName">{author?.name}</span>
            <span className="userDetailsAbout"></span>
          </div>
        </div>
        {author._id === user._id && (
          <div>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={deletePost}>Delete</MenuItem>
              {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </div>
        )}
      </div>
      <div className="mainFeedPost">
        <p>{content}</p>
        {props?.images &&
          props?.images?.map((image, i) => <img key={i} src={image} />)}

        <div className="likesContainer">
          <div className="likeTextWrapper">
            <ThumbUpIcon style={{ color: "blue", height: "16px" }} />
            <span className="likeText">
              {(likeCount || 0) + (liked ? 1 : 0)}
            </span>
          </div>
          <div className="likeTextWrapper">
            <span className="likeText">{commentCount || 0} comments</span>
          </div>
        </div>
        <div style={{ marginBlock: "5px" }} className="app-hr-line"></div>
        <div className="postActions">
          <ul>
            <li className="postActionItem" onClick={toggleLike}>
              {liked ? (
                <>
                  <ThumbUpIcon style={{ color: "blue" }} />
                  <span>Liked</span>
                </>
              ) : (
                <>
                  <ThumbUpOffAltIcon />
                  <span>Like</span>
                </>
              )}
            </li>
            <li
              className="postActionItem"
              onClick={() => setShowComments(!showComments)}
            >
              <CommentRoundedIcon />
              Comment
            </li>
            <li className="postActionItem">
              <AutorenewSharpIcon />
              Repost
            </li>
            <li className="postActionItem">
              <SendSharpIcon />
              Send
            </li>
          </ul>
        </div>
        {showComments && <Comments _id={_id} />}
      </div>
    </div>
  );
}

export default Post;
