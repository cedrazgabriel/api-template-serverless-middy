import middy from "@middy/core";
import httpRouterHandler, { Route } from "@middy/http-router";
import { errorHanderMiddleware } from "./middlewares/error-handler";

export function makeRouterHandler(routes: Route<any, any>[]) {
    return middy()
        .use(errorHanderMiddleware())
        .handler(httpRouterHandler(routes));
}