import React, { useEffect, useState } from "react";

import Post from "./Post";
import Feedform from "./FeedEssential/Feedform";
import useApi from "../Hooks/useApi";
import { useSelector } from "react-redux";

function Feed() {
  const { data, loading, get } = useApi([]);
  const [refresh, setRefresh] = useState(null);
  const { data: userPostData, get: getUserPost } = useApi([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    get("/linkedin/post");
    getUserPost(`/linkedin/user/${user._id}/posts`);
  }, [refresh]);
  console.log("debug", userPostData);
  return (
    <div className="feed">
      <Feedform setRefresh={setRefresh} />
      {userPostData?.data?.toReversed()?.map((post) => (
        <Post key={post._id} {...post} setRefresh={setRefresh} />
      ))}
      {data?.data?.map((post) => (
        <Post key={post._id} {...post} setRefresh={setRefresh} />
      ))}
    </div>
  );
}

export default Feed;
