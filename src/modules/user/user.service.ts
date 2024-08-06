import { UserRepository } from './index';
import { compare } from 'bcryptjs';

export const getUserByEmail = async (emailAddress: string) =>
    UserRepository.findOne(emailAddress);

export const isPasswordMatch = async (
    password: string,
    userPassword: string
): Promise<boolean> => compare(password, userPassword);
