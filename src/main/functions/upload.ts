import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';
import { makeHandler } from './middy/make-handler'
import { IFile } from '../../application/types/IFile';
import { s3Cliente } from '../../application/clients/s3-client';
import { HttpError } from '../../application/errors/http-error';

interface IUploadRequestBody {
    firstName: string
    lastName: string
    file: IFile;
}


export const handler = makeHandler<IUploadRequestBody>(async (request) => {
    const { file } = request.body

    if (!file) {
        throw new HttpError(400, { error: 'File is required' })
    }

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