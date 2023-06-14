import { User } from "../db";
import { hashPassword } from "../utils/auth.utils";
import logger from "../logger";

export const createModerator = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phone, profilePicture } =
      req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        message: "Moderator alredy exist",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await hashPassword(password);
    const createModerator = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      profilePicture,
      role: 1,
    });
    res.status(200).json({
      message: "Moderator created succesfully",
      success: true,
      data: createModerator,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { email } = res.body;
    const deletedUser = await User.findOneAndDelete(email);
    res.status(200).json({
      message: "User deleted successfully",
      success: "true",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const changePrivileges = async (req, res) => {
  try {
    const { email, role } = req.body;
    const updatedPrivilege = await User.findOneAndUpdate(
      email,
      {
        $push: {
          role: role,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "User Privilages updated successfully",
      success: true,
      data: updatedPrivilege,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { pageNumber = 1 } = req.query;
    const offset = (pageNumber - 1) * 10;
    const users = await User.find()
      .limit(10)
      .skip(offset)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
