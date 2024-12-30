import { ListUsersController } from "../../application/controllers/list-users-controller";
import { UpdateUserController } from "../../application/controllers/update-user-controller";
import { makeHandler } from "../middy/make-handler";
import { makeRouterHandler } from "../middy/make-router-handler";

export const handler = makeRouterHandler([
    {
        path: "/users",
        method: "GET",
        handler: makeHandler(new ListUsersController())
    },
    {
        path: "/users/{userId}",
        method: "PUT",
        handler: makeHandler(new UpdateUserController())
    },
]);