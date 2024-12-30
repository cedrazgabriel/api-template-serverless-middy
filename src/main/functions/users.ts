import { makeListUsersController } from "../factories/make-list-users-controller";
import { makeUpdateUsersController } from "../factories/make-update-users-controller";
import { makeHandler } from "../middy/make-handler";
import { makeRouterHandler } from "../middy/make-router-handler";

export const handler = makeRouterHandler([
    {
        path: "/users",
        method: "GET",
        handler: makeHandler(makeListUsersController())
    },
    {
        path: "/users/{userId}",
        method: "PUT",
        handler: makeHandler(makeUpdateUsersController())
    },
]);