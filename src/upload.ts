import { makeHandler } from './middy/make-handler'
import { IFile } from './types/IFile';

interface  IUploadRequestBody {
    firstName: string
    lastName: string
    file: IFile;
}


export const handler = makeHandler<IUploadRequestBody>(async (request) => {
    return {
        statusCode: 200,
        body: {
            filename: request.body.file.filename,
        },
    }
})