import { BadRequestError } from "../errors/index.js";

const testUser = async (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test user cannot perform this action.");
  }
  next();
};

export default testUser;