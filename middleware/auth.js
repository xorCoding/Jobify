import jwt from "jsonwebtoken";

import { UnAuthenticatedError } from "../errors/index.js";

UnAuthenticatedError;

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError("Authentication failed. Please login.");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "643a9c76da24e7d3d34cd8d9";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (err) {
    throw new UnAuthenticatedError("Authentication failed. Please login.");
  }
};

export default auth;
