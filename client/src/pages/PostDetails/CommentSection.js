import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { commentPost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const commentsRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const finalComment = {
      username: user?.result?.username,
      text: comment,
      creator: user?.result?._id,
    };

    console.log(finalComment);

    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-between mt-3 mb-3">
        <div className="h-[200px] overflow-y-auto mr-7 w-[calc(100% - 440px)]">
          <h3 className="mb-3 text-2xl text-textColor">Comments</h3>
          {comments?.length ? (
            comments?.map((c, i) => (
              <div className="flex items-center justify-between w-full gap-1">
                <h4 key={i} className="ml-2 text-sm text-placeholderColor">
                  <strong
                    className="cursor-pointer text-buttonColor"
                    onClick={() => navigate(`/${c.username}`)}
                  >
                    {c.username}:{" "}
                  </strong>
                  {c.text}
                </h4>
              </div>
            ))
          ) : (
            <h6 className="ml-2 text-sm text-placeholderColor">
              No comments yet
            </h6>
          )}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
          <div className="w-[400px]">
            <h5 className="mb-2 text-textColor">Leave a comment</h5>
            <textarea
              className="w-full p-2 border rounded-md bg-inherit border-placeholderColor text-textColor"
              rows={5}
              variant="outlined"
              label="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="flex items-center justify-center w-full py-2 mt-2 rounded-md cursor-pointer bg-buttonColor text-textColor disabled:bg-blue-300 disabled:cursor-not-allowed"
              disabled={!comment}
              variant="contained"
              onClick={handleSubmit}
            >
              Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
