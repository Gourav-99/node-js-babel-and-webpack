import express from "express";
import { comment, deleteComment } from "../controller/comment";
import { deletePermission } from "../middleware";

const router = express.Router();

router.post("/:id", comment);

router.delete("/:id", deletePermission, deleteComment);

export { router };
