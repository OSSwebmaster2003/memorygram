import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts?.length && !isLoading) {
    return <div className="text-lg text-textColor">No Posts</div>;
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="grid items-stretch gap-4 p-6 rounded-md bg-mainColor sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts?.map((post) => (
        <div key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
