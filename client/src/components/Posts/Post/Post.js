import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

import {
  media,
  border,
  fullHeightCard,
  card,
  overlay,
  overlay2,
  grid,
  details,
  title,
  cardActions,
} from "./styles";

const Post = ({ post }) => {
  return (
    <Card sx={card}>
      <CardMedia sx={media} image={post.selectedFile} title={post.title} />
      <Box component="div" sx={overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>
      <Box component="div" sx={overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Box>
      <Box component="div" sx={details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Box>
      <CardContent>
        <Typography sx={title} variant="h5" gutter="bottom">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
