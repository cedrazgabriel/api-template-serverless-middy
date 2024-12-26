import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { APIGatewayProxyEventV2 } from "aws-lambda";

type Handler = (event: APIGatewayProxyEventV2) => Promise<any>

export function makeHandler(handler : Handler) {
    return middy()
    .use(httpJsonBodyParser({disableContentTypeError: true}))
    .handler(handler)
}