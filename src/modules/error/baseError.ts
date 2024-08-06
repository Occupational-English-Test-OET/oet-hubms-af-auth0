class BaseError extends Error {
    override stack?: string;
    errorMessage: string;

    constructor(message: string, stack = '') {
        super(message);
        this.errorMessage = message;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default BaseError;
