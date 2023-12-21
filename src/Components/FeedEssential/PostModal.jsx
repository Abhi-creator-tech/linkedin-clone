import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import useApi from "../../Hooks/useApi";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import "../../css/PostModal.css";
import { IconButton, Button } from "@mui/material";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "calc(100vh - 100px)",
  //   minHeight: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  //   overflowY: "auto",
};

function PostModal({ handleClose, setRefresh }) {
  const [postContent, setPostContent] = useState({
    content: "",
    image: "",
  });
  const { post } = useApi();
  const { user } = useSelector((state) => state.auth);
  const handlePost = async () => {
    if (postContent.content.trim() !== "") {
      const requestData = new FormData();
      requestData.append("content", postContent.content);
      requestData.append("images", postContent.image);
      await post("/linkedin/post", requestData);
      handleClose();
      setRefresh(Math.random() * Date.now());
    }
  };
  console.log("debuguserid", user._id);

  const handleTextContent = (e) => {
    setPostContent((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };
  const handleImage = (e) => {
    console.log(e.target.result);
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(URL.createObjectURL(file));
        setPostContent((prev) => ({
          ...prev,
          imageURL: e.target.result,
          image: file,
        }));
      };
    }
  };
  const handleRemoveImage = () => {
    setPostContent((prev) => ({
      ...prev,
      image: "",
    }));
  };

  return (
    <Box sx={style}>
      <div className="postModal">
        <div className="profileSection">
          <div>
            <Avatar />
          </div>
          <h2>{user.name}</h2>
        </div>
        <div className="content">
          <textarea
            type="text"
            value={postContent.content}
            onChange={handleTextContent}
            placeholder="What do you want to talk about?"
            className="postContent"
          ></textarea>
          <div className="imgBox">
            {postContent.image && (
              <>
                <img src={postContent.imageURL} />
                <div className="closeIcon">
                  <IconButton onClick={handleRemoveImage}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </>
            )}
          </div>
        </div>
        <input type="file" id="gallery" onChange={handleImage} />
        <IconButton
          style={{
            width: "40px",
            alignItems: "center",
            height: "40px",
            marginBlock: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            paddingTop: "15px",
          }}
        >
          <label htmlFor="gallery" className="pic">
            <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
          </label>
        </IconButton>

        <div className="btn">
          <Button variant="contained" onClick={handlePost}>
            Post
          </Button>
        </div>
        <div className="closeIcon">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

export default PostModal;
