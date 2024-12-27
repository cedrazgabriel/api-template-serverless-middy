import { makeHandler } from "./middy/make-handler";
import { makeRouterHandler } from "./middy/make-router-handler";

const listUsersHandler = makeHandler(async () => {
    return {
        statusCode: 200,
        body: {
            qualquer: "coisa"
        }
    }
})

const updateUserHandler = makeHandler(async (request) => {
    return {
        statusCode: 200,
        body: request
    }
})

export const handler = makeRouterHandler([
    {
        path: "/users",
        method: "GET",
        handler: listUsersHandler
    },
    {
        path: "/users/{userId}",
        method: "PUT",
        handler: updateUserHandler
    },
]);