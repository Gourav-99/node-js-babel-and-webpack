import { Post } from "../db";
import logger from "../logger";

export const getPosts = async (req, res) => {
  try {
    const { pageNumber = 1 } = req.query;
    // page size = 10
    const offset = (pageNumber - 1) * 10;
    const posts = await Post.find()
      .limit(10)
      .skip(offset)
      .sort({ createdAt: -1 })
      .populate("user", "firstName lastName email profilePicture")
      //   .populate("comments", "commentText user");
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "firstName lastName email profilePicture",
        },
      });
    return res.status(200).json({
      message: "Posts fetched successfully",
      success: true,
      data: posts,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findOne({ _id: id });
    return res.status(200).json({
      message: "Post fetched successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { title, description, image } = req.body;
    const post = await Post.create({
      title,
      description,
      image,
      user: userId,
    });
    return res.status(200).json({
      message: "Post created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const deletePost = async (req, res) => {
  // only the owner should be able to delete a post or a moderator
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Post deleted successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const likePost = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id } = req.params;
    // addtoset pushesh only unique user to the array
    const updatedPostLike = await Post.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          likes: userId,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "post liked successfully",
      success: true,
      data: updatedPostLike,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
