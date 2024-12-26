import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpResponseSerializer from '@middy/http-response-serializer'
import { IHttpRequest, IHttpResponse } from "../types/IHttp";

type Handler = (request : IHttpRequest) => Promise<IHttpResponse>

export function makeHandler(handler : Handler) {
    return middy()
    .use(httpJsonBodyParser({disableContentTypeError: true}))
    .use(httpResponseSerializer({
        defaultContentType: 'application/json',	
        serializers: [
            {
                regex: /^application\/json$/,
                serializer: ({ body }) => JSON.stringify(body)
            }
        ],
    }))
    .handler(handler)
}