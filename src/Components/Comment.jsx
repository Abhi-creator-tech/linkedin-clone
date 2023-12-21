import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useApi from "../Hooks/useApi";

const Comment = ({ content, _id, author, removeComment }) => {
  const commentRef = useRef(null);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { user } = useSelector((state) => state.auth);

  const { data, patch } = useApi();

  const toggleEditComment = () => {
    if (isReadOnly) {
      commentRef.current.focus();
    } else {
      updateComment();
    }
    setIsReadOnly(!isReadOnly);
  };
  useEffect(() => {
    commentRef.current.value = content;
  }, []);

  const updateComment = (e) => {
    console.log(commentRef.current.value);
    patch(`/linkedin/comment/${_id}`, {
      content: commentRef.current.value,
    });
  };
  const handleRemove = (e) => {
    e.stopPropagation();
    removeComment(_id);
  };

  return (
    <div className="container">
      <textarea
        ref={commentRef}
        readOnly={isReadOnly}
        className="container2"
      ></textarea>
      {user._id === author && (
        <div>
          <button onClick={toggleEditComment}>
            {isReadOnly ? "edit" : "save"}
          </button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};
export default Comment;
