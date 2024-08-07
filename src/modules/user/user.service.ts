import { User, UserRepository } from './index';
import { compare } from 'bcryptjs';

export const getUserByEmail = async (
    emailAddress: string
): Promise<User | null> => UserRepository.findOne(emailAddress);

export const isPasswordMatch = async (
    password: string,
    userPassword: string
): Promise<boolean> => compare(password, userPassword);
