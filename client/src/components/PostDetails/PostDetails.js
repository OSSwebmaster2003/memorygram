import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";

import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";
import {
  card,
  imageSection,
  loadingPaper,
  media,
  section,
  recommendedPosts,
} from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    dispatch(getPost(id));

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }

    //eslint-disable-next-line
  }, [post]);

  const recommendedposts = posts.filter(({ _id }) => _id !== post?._id);

  if (!post) return null;

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
          <CommentSection post={post} />
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
      {recommendedposts.length && (
        <Box sx={section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <Box sx={recommendedPosts}>
            {recommendedposts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <Box
                  key={_id}
                  sx={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <Box component="img" src={selectedFile} width="200px" />
                </Box>
              )
            )}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default PostDetails;
