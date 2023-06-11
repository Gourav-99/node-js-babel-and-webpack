import { Post } from "../db/schema/Post";
import logger from "../logger";
// Working here not working need to check next time start here
export const getPosts = async (req, res) => {
  try {
    const { pageNumber = 1 } = req.query;
    // page size = 10
    const offset = (pageNumber - 1) * 10;
    const posts = await Post.find()
      .limit(10)
      .skip(offset)
      .sort({ createdAt: -1 });
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
    const { userId, title, description, image } = req.body;
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
