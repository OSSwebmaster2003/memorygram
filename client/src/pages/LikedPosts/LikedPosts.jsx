import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getLikedPosts } from "../../actions/posts";
import SinglePost from "../../components/SinglePost/SinglePost";

const LikedPosts = () => {
  const { posts } = useSelector((state) => state.posts);
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    dispatch(getLikedPosts(username, navigate));

    // eslint-disable-next-line
  }, [username]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-textColor">
        <span className="text-buttonColor">{username}</span> liked{" "}
        <span className="text-buttonColor">{posts?.length}</span> memory
      </h1>
      {posts?.length > 0 && (
        <div className="grid items-stretch gap-4 p-6 rounded-md bg-mainColor sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {posts?.map((post) => (
            <SinglePost openPost={openPost} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedPosts;
