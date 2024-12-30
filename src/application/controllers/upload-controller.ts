import { randomUUID } from "node:crypto";
import { HttpError } from "../errors/http-error";
import { IController } from "../types/IController";
import { IFile } from "../types/IFile";
import { IHttpRequest, IHttpResponse } from "../types/IHttp";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Cliente } from "../clients/s3-client";

interface IUploadBody {
    file: IFile;
}

export class UploadControler implements IController<IUploadBody> {
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

        await s3Cliente.send(putObjectCommand)

        return {
            statusCode: 200,
            body: {
                filename: newFileName,
            },
        }
    }

}