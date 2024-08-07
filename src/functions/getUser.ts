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
            jsonBody: {
                result: user,
            },
        };
    } catch (error) {
        return {
            jsonBody: {
                result: error,
            },
        };
    }
};

app.http('getUser', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: getUser,
});
