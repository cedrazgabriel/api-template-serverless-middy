import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { makeHandler } from './middy/make-handler'

export const handler = makeHandler(async (event: APIGatewayProxyEventV2) => {
    return {
        statusCode: 200,
        body: {
            qualquer: 'coisa'
        }
    }
})