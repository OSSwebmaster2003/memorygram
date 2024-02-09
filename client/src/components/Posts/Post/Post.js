import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import { CardContent, Button, Typography } from "@mui/material";

import { truncatedString } from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?.sub || user?.result?._id;

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon
            fontSize="small"
            className="font-bold text-buttonColor"
          />
          <div className="font-bold text-buttonColor">
            &nbsp;
            {post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
          </div>
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon
            fontSize="small"
            className="font-bold text-buttonColor"
          />
          <div className="font-bold text-buttonColor">
            &nbsp;{post.likes.length}{" "}
            {post.likes.length === 1 ? "Like" : "Likes"}
          </div>
        </>
      );
    }

    return (
      <>
        <ThumbUpOffAltIcon
          fontSize="small"
          className="text-bold text-buttonColor"
        />
        <div className="font-bold text-buttonColor">&nbsp;Like</div>
      </>
    );
  };

  return (
    <div className="relative flex flex-col justify-between h-full rounded-md bg-bgColor">
      <img
        className="w-full aspect-video rounded-t-md"
        src={post.selectedFile}
        title={post.title}
        alt={post.title}
      />
      <div className="absolute top-5 left-5 text-textColor">
        <h6>{post.name}</h6>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.sub === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className="absolute top-[5px] right-[-15px] text-textColor z-50">
          <Button
            style={{ color: "white" }}
            onClick={() => {
              setCurrentId(post._id);
              navigate("/posts/create");
            }}
          >
            <EditIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className="flex justify-between m-5 text-textColor">
        <h2 className="text-sm text-textGreen">
          {post.tags.map((tag) => `#${tag} `)}
        </h2>
      </div>
      <button className="block text-start" onClick={openPost}>
        <h1 className="px-4 text-2xl font-bold text-textColor">{post.title}</h1>
      </button>
      <CardContent>
        <Typography variant="subtitle1" component="p" sx={truncatedString}>
          {post.message}
        </Typography>
      </CardContent>
      <div className="flex items-center justify-between pt-1 pb-3">
        <button
          className="flex items-center justify-center px-4 py-2 text-buttonColor"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </button>
        {(user?.result?.sub === post?.creator ||
          user?.result?._id === post?.creator) && (
          <button
            className="flex items-center justify-center px-4 py-2 font-semibold text-red-600"
            onClick={() => {
              dispatch(deletePost(post._id));
              navigate("/");
            }}
          >
            <DeleteIcon fontSize="small" /> Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
