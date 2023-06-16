import { verifyAuthToken } from "../utils/token";
import { Post, Comment } from "../db";
export const accessPermission = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const { role } = req.user;
      if (allowedRoles.includes(role)) {
        return next();
      }
      res.status(401).json({
        message: "Unauthorised User",
        success: false,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  };
};
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.redirect("/signin");
  }
  try {
    const { id, email, role } = verifyAuthToken(token);
    req.user = {
      id,
      email,
      role,
    };
    next();
  } catch (error) {
    res.redirect("/logout");
  }
};

export const deletePermission = async (req, res, next) => {
  try {
    const { role, id: userId } = req.user;
    const { id } = req.params;
    if (
      role === 1 ||
      role === 2 ||
      (await isPosted(id, userId)) ||
      (await isCommented(id, userId))
    ) {
      return next();
    }
    res.status(401).json({
      message: "Access Not Allowed",
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
const isPosted = async (postId, userId) => {
  const getPost = await Post.findOne({ _id: postId, user: userId });
  console.log(getPost);
  if (getPost) {
    return true;
  }
  return false;
};

const isCommented = async (commentId, userId) => {
  const getComment = await Comment.findOne({ _id: commentId, user: userId });
  if (getComment) {
    return true;
  }
  return false;
};
