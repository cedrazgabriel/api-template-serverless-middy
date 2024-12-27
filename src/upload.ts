import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';
import { makeHandler } from './middy/make-handler'
import { IFile } from './types/IFile';
import { s3Cliente } from './clients/s3-client';

interface IUploadRequestBody {
    firstName: string
    lastName: string
    file: IFile;
}


export const handler = makeHandler<IUploadRequestBody>(async (request) => {
    const { file } = request.body

    const newFileName = `${randomUUID()}-${file.filename}`

    const putObjectCommand = new PutObjectCommand({
        Bucket: "cedraz-bucket",
        Key: newFileName,
        Body: file.content,
    })

    await s3Cliente.send(putObjectCommand)

    return {
        statusCode: 200,
        body: {
            filename: newFileName,
        },
    }
})