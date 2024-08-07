import { StatusCodes } from 'http-status-codes';
import { User, UserService } from '@/modules/user';
import { ApiError } from '@/modules/error';

export const loginUserWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<User> => {
    const user = await UserService.getUserByEmail(email);
    if (!user || !(await UserService.isPasswordMatch(password, user.secret))) {
        throw new ApiError(
            StatusCodes.UNAUTHORIZED,
            'Incorrect email or password'
        );
    }
    return user;
};
