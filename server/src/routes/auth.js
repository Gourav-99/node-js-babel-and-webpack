import Router from "express";
import { v4 as uuid } from "uuid";
import { resetPassword, changePassword, signup } from "../controller/auth";

const router = Router();

// router.post("/signin", (req, res) => {
//   try {
//     const { email, name, password } = req.body;
//     const newUser = {
//       userId: uuid(),
//       email,
//       name,
//       password,
//     };
//     res.status(200).json({
//       message: "User created",
//       data: newUser,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// create user
router.post("/signup", signup);
// create reset pass link
router.post("/reset-password", resetPassword);
// reset the password
router.post("/reset-password/:token", changePassword);
export { router };
