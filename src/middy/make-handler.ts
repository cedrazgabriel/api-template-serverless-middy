import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpResponseSerializer from '@middy/http-response-serializer'
import { IHttpRequest, IHttpResponse } from "../types/IHttp";

type Handler<TBody extends Record<string, any> | undefined> = (request : IHttpRequest<TBody>) => Promise<IHttpResponse>

export function makeHandler<TBody extends Record<string, any> | undefined = undefined>(handler : Handler<TBody>) {
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