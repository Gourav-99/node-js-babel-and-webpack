import { Router } from "express";
import { createPost, getPost, getPosts, deletePost } from "../controller/post";
import { deletePermission } from "../middleware";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
// protected endpoint
router.post("/", createPost);
router.delete("/:id", deletePermission, deletePost);

export { router };
