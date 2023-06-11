import mongoose from "mongoose";
import logger from "../logger/index";
const DB_URI = process.env.DB_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {});
    logger.warn("connected to database");
  } catch (error) {
    logger.log(error);
  }
};
