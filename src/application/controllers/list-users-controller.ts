import { IController } from "../types/IController";
import { IHttpResponse } from "../types/IHttp";

export class ListUsersController implements IController {
    async handler(): Promise<IHttpResponse> {
        return {
            statusCode: 200,
            body: {
                users: [
                    {
                        id: 1,
                        name: 'John Doe',
                        email: 'johndoe@gmail.com'
                    },
                    {
                        id: 2,
                        name: 'Jane Doe',
                        email: 'janedoe@gmail.com'
                    },
                ]
            }
        }
    }

}