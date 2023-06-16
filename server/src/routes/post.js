import { Router } from "express";
import {
  createPost,
  getPost,
  getPosts,
  deletePost,
  likePost,
} from "../controller/post";
import { deletePermission } from "../middleware";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/:id", likePost);
// protected endpoint
router.post("/", createPost);
router.delete("/:id", deletePermission, deletePost);

export { router };
