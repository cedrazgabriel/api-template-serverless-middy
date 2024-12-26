import { makeHandler } from './middy/make-handler'

export const handler = makeHandler(async (request) => {
    return {
        statusCode: 200,
        body: {
            qualquer: request.body?.name
        }
    }
})