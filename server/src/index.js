import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger, { morganMiddleware } from "./logger";
import cookieParser from "cookie-parser";
import { router as authRoute } from "./routes/auth";
import { router as postRoute } from "./routes/post";
import { router as commentRoute } from "./routes/comment";
import { router as adminRoutes } from "./routes/admin";
import { connectDB } from "./utils/db.utils";
import { authMiddleware } from "./middleware";

const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use("/auth", authRoute);
app.use("/post", authMiddleware, postRoute);
app.use("/comment", authMiddleware, commentRoute);
app.use("/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send(`Server is running `);
});
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve() + "/pages/signup.html");
});

app.get("/signin", (req, res) => {
  res.sendFile(path.resolve() + "/pages/signin.html");
});
app.get("/resetpass", (req, res) => {
  res.sendFile(path.resolve() + "/pages/forgot-password.html");
});

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
