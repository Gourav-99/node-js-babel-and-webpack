import { Router } from "express";
import { createPost, getPost, getPosts } from "../controller/post";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
// protected endpoint
router.post("/", createPost);

export { router };
