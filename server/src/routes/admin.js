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
// deletes user using email only
router.post("/delete-user", accessPermission([2]), deleteUser);
// takes all the details of moderator firstname, lastname,email, pass
router.post("/create-moderator", accessPermission([2]), createModerator);
// takes email and its role
router.post("/change-role", accessPermission([2]), changePrivileges);
// takes email and disable as input
router.post("/disable-user", accessPermission([1, 2]), disableUser);

router.get("/comments", accessPermission([1, 2]), getComments);
export { router };
