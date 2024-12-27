import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpResponseSerializer from '@middy/http-response-serializer'
import httpMultipartBodyParser from '@middy/http-multipart-body-parser'
import { IHttpRequest, IHttpResponse } from "../types/IHttp";
import { errorHanderMiddleware } from "./middlewares/error-handler";

type Handler<TBody extends Record<string, any> | undefined> = (request: IHttpRequest<TBody>) => Promise<IHttpResponse>

export function makeHandler<TBody extends Record<string, any> | undefined = undefined>(handler: Handler<TBody>) {
    return middy()
        .use(httpMultipartBodyParser({ disableContentTypeError: true }))
        .use(httpJsonBodyParser({ disableContentTypeError: true }))
        .use(errorHanderMiddleware())
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