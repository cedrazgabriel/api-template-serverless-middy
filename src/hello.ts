import middy from '@middy/core'

export const handler = middy(async () => {
    return{
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Cedraz from middy'
        })
    }
})