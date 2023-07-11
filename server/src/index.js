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
const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "http://192.168.241.2:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/todos", authMiddleware, todoRoute);

const SECRET_KEY = "asdfg";
app.get("/validateToken/:token", (req, res) => {
  console.log(token, "validate");
  const { token } = req.params;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  try {
    const decoded = verifyAuthToken(token, SECRET_KEY);
    return res
      .status(200)
      .json({ message: "Token is valid", user: decoded, token });
  } catch (err) {
    // remote the cookie
    return res.status(401).json({ message: "Token is invalid" });
  }
});

app.get("/logout", (req, res) => {
  return res.status(200).clearCookie("access_token", { path: "/" }).json({
    message: "logged out successfully",
    success: true,
    data: null,
  });
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
