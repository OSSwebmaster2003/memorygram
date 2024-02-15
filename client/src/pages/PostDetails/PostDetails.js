import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";

import { Paper, CircularProgress, Divider } from "@mui/material";
import { loadingPaper } from "./styles";

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
    <div className="w-full p-4 mt-10 mb-10 border-none rounded-lg bg-mainColor">
      <div className="flex w-full gap-5">
        <div className="flex-1 rounded-lg">
          <h2 className="mb-4 text-4xl font-bold text-textColor">
            {post.title}
          </h2>
          <h6 className="w-full mb-3 text-sm font-semibold text-textGreen">
            {post.tags.map((tag) => `#${tag} `)}
          </h6>
          <p className="w-full mb-3 text-base italic text-placeholderColor">
            {post.message}
          </p>
          <h6 className="text-2xl font-medium text-textColor">
            Created by:{" "}
            <span
              className="mb-3 font-bold cursor-pointer text-buttonColor"
              onClick={() => navigate(`/${post.username}`)}
            >
              {post.username}
            </span>
          </h6>
          <h6 className="text-xs text-textYellow">
            {moment(post.createdAt).fromNow()}
          </h6>
          <Divider
            style={{
              margin: "20px 0",
              color: "white",
              border: "1px solid white",
            }}
          />
          <h1 className="text-textColor">
            <strong>Realtime Chat - coming soon!</strong>
          </h1>
          <Divider
            style={{
              margin: "20px 0",
              color: "white",
              border: "1px solid white",
            }}
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-[500px] h-[300px]"
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      <CommentSection post={post} />

      {recommendedposts.length && (
        <div className="flex-1 rounded-lg">
          <h5 className="text-2xl font-semibold text-textYellow">
            You might also like:
          </h5>
          <div className="flex items-start justify-start gap-3">
            {recommendedposts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  key={_id}
                  className="mt-5 cursor-pointer max-w-[400px] rounded-md p-5 bg-bgColor"
                  onClick={() => openPost(_id)}
                >
                  <h2 className="mb-1 text-2xl font-bold text-textColor">
                    {title}
                  </h2>
                  <h5 className="mb-2 text-sm italic font-semibold text-buttonColor">
                    {name}
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
                    {message}
                  </h3>
                  <h3 className="mb-2 text-textYellow">
                    Likes: {likes.length}
                  </h3>
                  <img
                    src={selectedFile}
                    alt=""
                    className="w-full rounded-md aspect-video"
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
