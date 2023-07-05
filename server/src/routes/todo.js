import { Router } from "express";
import {
  createTodo,
  updateTodoItem,
  deleteTodo,
  getTodos,
} from "../controller/todo";
const router = Router();

// router.get("/todo", getTodos);
router.get("/getTodos", getTodos);
router.post("/createTodo", createTodo);
router.patch("/:id", updateTodoItem);
router.delete("/:id", deleteTodo);
export default router;
