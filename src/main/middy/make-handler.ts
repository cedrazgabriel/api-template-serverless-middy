import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpResponseSerializer from '@middy/http-response-serializer'
import httpMultipartBodyParser from '@middy/http-multipart-body-parser'

import { errorHanderMiddleware } from "./middlewares/error-handler";
import { IController } from "../../application/types/IController";
import { sanitizeObject } from "../utils/sanitize-object";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeHandler(controller: IController<any>) {
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
        .handler(async (event) => {
            return await controller.handler({
                body: event.body,
                headers: sanitizeObject(event.headers),
                params: sanitizeObject(event.pathParameters),
            })
        })
}