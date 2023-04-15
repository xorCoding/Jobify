import { StatusCodes } from 'http-status-codes'; 
class CustomAPIError extends Error {
    constructor(message) {
      super(message); //super calls the parent class constructor, in this case Error
      this.statusCode = StatusCodes.BAD_REQUEST;
    }
  }
export default CustomAPIError;