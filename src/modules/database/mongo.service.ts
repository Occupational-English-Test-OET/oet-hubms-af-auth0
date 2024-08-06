import { Db, MongoClient } from 'mongodb';
import { User } from '@/modules/user';
import { BaseError } from '@/modules/error';

const uri = process.env.MONGODB_URI ?? '';
const dbName = process.env.MONGODB_DB_NAME ?? '';

async function connectToDatabase(): Promise<{
    client: MongoClient;
    db: Db;
}> {
    try {
        const client = await MongoClient.connect(uri);

        const db = client.db(dbName);
        db.collection<User>('users');

        console.log('connected to mongodb!');
        return { client, db };
    } catch (error) {
        console.log(error);
        throw new BaseError('Could not connect to MongoDB.');
    }
}

export { connectToDatabase };
