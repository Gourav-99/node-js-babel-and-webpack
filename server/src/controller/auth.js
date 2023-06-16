import { User } from "../db";
import logger from "../logger";
import {
  generateResetToken,
  verifyResetToken,
  generateAuthToken,
} from "../utils/token";
import { hashPassword, checkPass } from "../utils/auth.utils";

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phone, profilePicture } =
      req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        message: "User alredy exist",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await hashPassword(password);
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      profilePicture,
    });
    res.status(200).json({
      message: "User created succesfully",
      success: true,
      data: createUser,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    if (user.disabled) {
      return res.status(400).json({
        message: "disabled user",
        success: false,
      });
    }
    const isCorrectPassword = await checkPass(password, user.password);
    if (!isCorrectPassword) {
      res.status(400).json({
        message: "Invalid user details",
        success: false,
      });
    }
    console.log("user id ", user.id);
    const token = generateAuthToken({
      id: user.id,
      email: email,
      role: user.role,
    });
    console.log(token, "token");
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "logged in succesfully",
        success: true,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};
export const resetPassword = async (req, res, next) => {
  try {
    // check if user exists in the DB
    const { email } = req.body;
    userExists = await User.findOne({ emial });
    if (!userExists) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
        data: null,
      });
    }
    // generate a token and send email
    const token = generateResetToken({
      email: email,
    });
    const resetPasswordLink = `http://localhost:3000/reset-password/${token}`;
    // send the email
    return res.status(200).json({
      message: "Reset password link sent to email",
      success: true,
      data: null,
    });
  } catch (error) {
    logger.log(error);
    return res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { token } = req.params;
    // verify the token
    const payload = verifyResetToken(token);
    if (!payload) {
      return res.status(400).json({
        message: "Invalid or expired token",
        success: false,
        data: null,
      });
    }
    const { email } = payload;
    const user = await User.findOne({ email });
    //! redundant code
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
        data: null,
      });
    }
    // update the password
    const hashEdPassword = hashPassword(password);
    user.password = hashEdPassword;

    return res.status(200).json({
      message: "Password updated successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    logger.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
