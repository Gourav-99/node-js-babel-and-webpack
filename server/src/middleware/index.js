import { verifyAuthToken } from "../utils/token";
const SECRET_KEY = "asdfg";

export const authMiddleware = (req, res, next) => {
  // const token = req.headers.authorization;
  const token = req.cookies.access_token;
  // console.log(req.headers.authorization, "token");
  if (!token) {
    return res.status(400).json("unauthorised user");
  }
  try {
    // const tokenWithoutBearer = token.replace("Bearer ", "");
    const { id, email } = verifyAuthToken(token, SECRET_KEY);
    req.user = {
      id,
      email,
    };

    next();
  } catch (error) {
    return res.status(400).json("unauthorised user");
  }
};
