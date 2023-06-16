import Router from "express";
import {
  getUsers,
  deleteUser,
  createModerator,
  changePrivileges,
  disableUser,
  getComments,
} from "../controller/admin";
import { accessPermission } from "../middleware";
const router = Router();

router.get("/users", accessPermission([1, 2]), getUsers);

router.post("/delete-user", accessPermission([2]), deleteUser);

router.post("/create-moderator", accessPermission([2]), createModerator);

router.post("/change-role", accessPermission([2]), changePrivileges);

router.post("/disable-user", accessPermission([1, 2]), disableUser);

router.get("/comments", accessPermission([1, 2]), getComments);
export { router };
