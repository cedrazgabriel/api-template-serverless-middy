import { randomUUID } from "node:crypto";
import { HttpError } from "../errors/http-error";
import { IController } from "../types/IController";
import { IFile } from "../types/IFile";
import { IHttpRequest, IHttpResponse } from "../types/IHttp";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

interface IUploadBody {
    file: IFile;
}

export class UploadControler implements IController<IUploadBody> {
    constructor(private readonly s3Client: S3Client) { }

    async handler(request: IHttpRequest<IUploadBody>): Promise<IHttpResponse> {
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

        await this.s3Client.send(putObjectCommand)

        return {
            statusCode: 200,
            body: {
                filename: newFileName,
            },
        }
    }

}