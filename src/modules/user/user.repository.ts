import { MongoService } from '@/modules/database';
import { User } from './index';

export const findOne = async (emailAddress: string): Promise<User | null> => {
    const user = (await (await MongoService.connectToDatabase()).db
        .collection<User>('users')
        .findOne({ emailAddress: emailAddress })) as User;

    return user;
};
