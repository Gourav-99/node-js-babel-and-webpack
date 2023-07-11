import jwt from "jsonwebtoken";

const SECRET_KEY = "asdfg";
export const generateAuthToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};
export const verifyAuthToken = (token) => {
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    console.error(error);
    return false;
  }
};
