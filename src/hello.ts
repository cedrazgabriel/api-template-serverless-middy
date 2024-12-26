import { makeHandler } from './middy/make-handler'

export const handler = makeHandler(async () => {
    return{
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Cedraz from middy'
        })
    }
})