import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext,
} from '@azure/functions';
import { AuthService } from '@/modules/auth';
import { User } from '@/modules/user';

export const login = async (
    req: HttpRequest,
    context: InvocationContext
): Promise<HttpResponseInit> => {
    context.log(`Http function processed request for url "${req.url}"`);

    try {
        const request = (await req.json()) as User;

        const user = await AuthService.loginUserWithEmailAndPassword(
            request.emailAddress,
            request.secret
        );

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

app.http('login', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: login,
});
