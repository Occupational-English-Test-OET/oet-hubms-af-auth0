import BaseError from './baseError';

class ApiError extends BaseError {
    statusCode: number;
    errorMessage: string;

    constructor(statusCode: number, message: string, stack = '') {
        super(message, stack);
        this.statusCode = statusCode;
        this.errorMessage = message;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
