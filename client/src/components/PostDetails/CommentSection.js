import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { commentPost } from "../../actions/posts";

import { Typography, TextField, Button, Box } from "@mui/material";

import { commentsInnerContainer, commentsOuterContainer } from "./styles";

const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const commentsRef = useRef();

  const handleSubmit = async () => {
    const finalComment = `${user?.result?.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <Box component="div" sx={commentsOuterContainer}>
        <Box component="div" sx={commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.length ? (
            comments?.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                <strong>{c.split(": ")[0]}</strong>
                {c.split(":")[1]}
              </Typography>
            ))
          ) : (
            <Typography variant="subtitle1">No comments yet</Typography>
          )}
          <div ref={commentsRef} />
        </Box>
        {user?.result?.name && (
          <Box sx={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Leave a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              sx={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Comment
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
