import Router from "express";
import {
  getUsers,
  deleteUser,
  createModerator,
  changePrivileges,
} from "../controller/admin";
const router = Router();

router.get("/users", getUsers);

router.post("/delete-user", deleteUser);

router.post("/create-moderator", createModerator);

router.post("/change-role", changePrivileges);

export { router };
