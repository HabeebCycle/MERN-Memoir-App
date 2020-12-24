import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like-post", likePost);

export default router;
