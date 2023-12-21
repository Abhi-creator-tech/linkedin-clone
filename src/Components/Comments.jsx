import React, { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import Comment from "./Comment";

const Comments = ({ _id }) => {
  const [commentInputValue, setCommentInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const { data, get } = useApi();
  const { data: commentData, post } = useApi();
  const { Delete, error } = useApi();
  useEffect(() => {
    get(`/linkedin/post/${_id}/comments`);
  }, [commentData]);
  // console.log(_id, data);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/linkedin/comment/${_id}`, {
      content: commentInputValue,
    });
  };
  const handleComment = (e) => {
    const { value } = e.target;
    setCommentInputValue(value);
  };
  const removeComment = async (commentId) => {
    console.log("remove", commentId);
    await Delete(`/linkedin/comment/${commentId}`);
    setToggle(!toggle);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={commentInputValue} onChange={handleComment} type="text" />
        <button type="submit">Comment</button>
      </form>
      {/* {data?.data?.map(({ content, _id }) => (
        <p className="comments" key={_id}>
          {content}
        </p>
      ))} */}
      {data?.data?.toReversed()?.map((comment) => (
        <Comment key={comment._id} {...comment} removeComment={removeComment} />
      ))}
    </div>
  );
};

export default Comments;
