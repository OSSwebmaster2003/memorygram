import express from "express";
// import controllers
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  commentPost,
  getOwnPosts,
  getLikedPosts,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);
router.get("/:username/posts", getOwnPosts);
router.get("/:username/likes", getLikedPosts);

export default router;
