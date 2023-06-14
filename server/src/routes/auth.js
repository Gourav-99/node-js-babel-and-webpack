import Router from "express";
import {
  resetPassword,
  changePassword,
  signup,
  signin,
} from "../controller/auth";

const router = Router();

router.post("/signin", signin);
// create user
router.post("/signup", signup);
// create reset pass link
router.post("/reset-password", resetPassword);
// reset the password
router.post("/reset-password/:token", changePassword);
export { router };
