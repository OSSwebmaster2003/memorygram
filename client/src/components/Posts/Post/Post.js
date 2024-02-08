import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
  ButtonBase,
} from "@mui/material";

import {
  media,
  card,
  overlay2,
  title,
  cardActions,
  cardAction,
  truncatedString,
} from "./styles";

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
    <Card component="div" sx={card} raised elevation={6}>
      <CardMedia sx={media} image={post.selectedFile} title={post.title} />
      <div className="absolute top-5 left-5 text-textColor">
        <h6>{post.name}</h6>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.sub === post?.creator ||
        user?.result?._id === post?.creator) && (
        <Box component="div" sx={overlay2}>
          <Button
            style={{ color: "white" }}
            onClick={() => {
              setCurrentId(post._id);
              navigate("/posts/create");
            }}
          >
            <EditIcon fontSize="default" />
          </Button>
        </Box>
      )}
      <div className="flex justify-between m-5 text-textColor">
        <h2 className="text-sm text-textGreen">
          {post.tags.map((tag) => `#${tag} `)}
        </h2>
      </div>
      <ButtonBase sx={cardAction} component="span" onClick={openPost}>
        <Typography
          sx={title}
          gutterBottom
          variant="h5"
          component="h2"
          color="white"
          fontWeight={700}
        >
          {post.title}
        </Typography>
      </ButtonBase>
      <CardContent>
        <Typography variant="subtitle1" component="p" sx={truncatedString}>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            sx={{ color: "red" }}
            onClick={() => {
              dispatch(deletePost(post._id));
              navigate("/");
            }}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
