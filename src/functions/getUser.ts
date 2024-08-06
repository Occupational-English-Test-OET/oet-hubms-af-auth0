import { StatusCodes } from 'http-status-codes';
import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext,
} from '@azure/functions';
import { User, UserService } from '@/modules/user';

export const getUser = async (
    req: HttpRequest,
    context: InvocationContext
): Promise<HttpResponseInit> => {
    context.log(`Http function processed request for url "${req.url}"`);

    try {
        const request = (await req.json()) as User;

        const user = await UserService.getUserByEmail(request.emailAddress);

        return {
            status: StatusCodes.OK,
            jsonBody: {
                result: user,
            },
        };
    } catch (error) {
        return {
            status: StatusCodes.BAD_REQUEST,
            jsonBody: error,
        };
    }
};

app.http('getUser', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getUser,
});
