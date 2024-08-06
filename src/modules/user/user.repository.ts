import { MongoService } from '@/modules/database';
import { User } from './index';

export const findOne = async (emailAddress: string) => {
    const user = (await MongoService.connectToDatabase()).db
        .collection<User>('users')
        .findOne({ emailAddress: emailAddress });

    return user;
};
