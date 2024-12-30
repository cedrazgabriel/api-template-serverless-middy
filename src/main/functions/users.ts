import { makeRouterHandler } from "../middy/make-router-handler";

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