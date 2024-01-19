import React, { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import { getPost } from "../../actions/posts";

import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";
import { card, imageSection, loadingPaper, media, section } from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));

    // eslint-disable-next-line
  }, [id]);

  if (!post) return <>No Post Found </>;

  if (isLoading) {
    return (
      <>
        <Paper elevation={6} sx={loadingPaper}>
          <CircularProgress size="7em" />
        </Paper>
      </>
    );
  }
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <Box component="div" sx={card}>
        <Box component="div" sx={section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </Box>
        <Box component="div" sx={imageSection}>
          <img
            sx={media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </Box>
      </Box>
      {/* Recommended posts  */}
    </Paper>
  );
};

export default PostDetails;
