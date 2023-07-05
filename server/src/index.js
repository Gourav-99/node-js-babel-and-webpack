import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./utils/db.utils";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth";
import todoRoute from "./routes/todo";
import { authMiddleware } from "./middleware";
import { verifyAuthToken } from "./utils/token";
const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/todos", authMiddleware, todoRoute);

const SECRET_KEY = process.env.AUTH_SECRET_KEY || "asdfg";
app.get("/validateToken/:token", (req, res) => {
  console.log(token, "validate");
  const { token } = req.params;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  try {
    const decoded = verifyAuthToken(token, process.env.SECRET_KEY);
    return res
      .status(200)
      .json({ message: "Token is valid", user: decoded, token });
  } catch (err) {
    // remote the cookie
    return res.status(401).json({ message: "Token is invalid" });
  }
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
