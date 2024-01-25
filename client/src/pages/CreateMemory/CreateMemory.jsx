import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";

import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import {
  wrapper,
  form,
  heading,
  choosePicture,
  submitBtn,
  clearBtn,
} from "./styles";

const CreateMemory = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);

    //eslint-disable-next-line
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      navigate("/posts");
      clear();
    }
  };

  return (
    <Paper sx={wrapper}>
      <Box
        sx={form}
        component="form"
        autoComplete="off"
        noValidate
        action=""
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" sx={heading}>
          {currentId ? `Editing` : `Creating`} a Memory
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          rows="7"
          multiline
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          placeholder="asia,china,fun"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <Box sx={choosePicture}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>
        <Button
          sx={submitBtn}
          variant="contained"
          type="submit"
          disabled={
            !postData.title ||
            !postData.message ||
            !postData.tags ||
            !postData.selectedFile
          }
        >
          Submit
        </Button>
        <Button sx={clearBtn} variant="contained" onClick={clear}>
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateMemory;
