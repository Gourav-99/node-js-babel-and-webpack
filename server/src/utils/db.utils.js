import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.warn("Connected to DB");
  } catch (error) {
    console.error(error.message);
  }
};
