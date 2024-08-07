import { ObjectId } from 'mongodb';

export default class User {
    emailAddress = '';
    secret = '';
    id?: ObjectId;
}
