import { makeHandler } from './middy/make-handler'

interface  IHelloRequestBody {
    firstName: string
    lastName: string
}


export const handler = makeHandler<IHelloRequestBody>(async (request) => {
    return {
        statusCode: 200,
        body: {
            qualquer: request.body.firstName,
            coisa: request.body.lastName
        },
    }
})