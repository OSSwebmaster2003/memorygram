import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";

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
  const { isLoading } = useSelector((state) => state.posts);

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

  const inputStyle =
    "w-full px-4 py-3 border-none rounded-md outline-none bg-bgColor text-textColor placeholder:text-placeholderColor placeholder:font-bold";

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex items-center justify-center">
      <form
        style={{ width: "500px", padding: "20px" }}
        className="flex flex-col items-center justify-center gap-4 rounded-lg bg-mainColor"
        autoComplete="off"
        noValidate
        action=""
        onSubmit={handleSubmit}
      >
        <h6 className="w-full text-lg text-center text-textColor">
          {currentId ? `Editing` : `Creating`} a Memory
        </h6>
        <input
          name="title"
          placeholder="Title"
          className={inputStyle}
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          required
        />
        <textarea
          className={inputStyle}
          placeholder="Message"
          name="message"
          label="Message"
          rows="7"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          required
        />
        <input
          name="tags"
          className={inputStyle}
          placeholder="asia,china,fun"
          label="Tags"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          required
        />
        <div className="flex items-center justify-start w-full gap-2 cursor-pointer">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          className="w-full py-2 text-base font-medium border-2 rounded-md cursor-pointer text-textColor bg-inherit disabled:cursor-not-allowed"
          type="submit"
          disabled={
            !postData.title ||
            !postData.message ||
            !postData.tags ||
            !postData.selectedFile
          }
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
        <button
          className="w-full py-2 text-base font-medium bg-red-600 rounded-md cursor-pointer text-textColor"
          onClick={clear}
          type="button"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default CreateMemory;
