import React from "react";

const SinglePost = ({ post, openPost }) => {
  return (
    <div
      key={post._id}
      className="mt-5 cursor-pointer max-w-[400px] rounded-md p-5 bg-bgColor"
      onClick={() => openPost(post._id)}
    >
      <h2 className="mb-1 text-2xl font-bold text-textColor">{post.title}</h2>
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
  );
};

export default SinglePost;
