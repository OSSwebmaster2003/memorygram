import express from "express";
// import controllers
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
