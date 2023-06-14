import jwt from "jsonwebtoken";
import logger from "../logger";
import { log } from "winston";

const resetPassSecret = process.env.RESET_PASSWORD_SECRET;
const authSecret = process.env.AUTH_TOKEN;

export const generateResetToken = (payload) => {
  return jwt.sign(payload, resetPassSecret, { expiresIn: "5m" });
};
export const generateAuthToken = (payload) => {
  return jwt.sign(payload, process.env.AUTH_TOKEN);
};
export const verifyResetToken = (token) => {
  try {
    const payload = jwt.verify(token, resetPassSecret);
    return payload;
  } catch (error) {
    logger.log(error);
    return false;
  }
};
export const verifyAuthToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.AUTH_TOKEN);
    return payload;
  } catch (error) {
    logger.log(error);
    return false;
  }
};
