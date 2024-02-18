import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getOwnPosts } from "../../actions/posts";

const OwnPosts = () => {
  const { posts } = useSelector((state) => state.posts);
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    dispatch(getOwnPosts(username, navigate));

    // eslint-disable-next-line
  }, [username]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-textColor">
        <span className="text-buttonColor">{username}</span> posted{" "}
        <span className="text-buttonColor">{posts?.length}</span> memory
      </h1>
      <div className="grid items-stretch gap-4 p-6 rounded-md bg-mainColor sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="mt-5 cursor-pointer max-w-[400px] rounded-md p-5 bg-bgColor"
            onClick={() => openPost(post._id)}
          >
            <h2 className="mb-1 text-2xl font-bold text-textColor">
              {post.title}
            </h2>
            <h5 className="mb-2 text-sm italic font-semibold text-buttonColor">
              {post.name}
            </h5>
            <h3
              className="mb-3 text-sm text-placeholderColor"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
              }}
            >
              {post.message}
            </h3>
            <h3 className="mb-2 text-textYellow">Likes: {post.likes.length}</h3>
            <img
              src={post.selectedFile}
              alt=""
              className="w-full rounded-md aspect-video"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnPosts;
