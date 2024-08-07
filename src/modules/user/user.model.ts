import { ObjectId } from 'mongodb';

export default class User {
    constructor(
        public emailAddress: string,
        public secret: string,
        public id?: ObjectId
    ) {}
}
