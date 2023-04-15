import { UnAuthenticatedError } from "../errors/index.js";
const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnAuthenticatedError(
    "You are not authorized to perform this action"
  );
};

export default checkPermission;
