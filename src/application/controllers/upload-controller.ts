import { IController } from "../types/IController";
import { IHttpRequest, IHttpResponse } from "../types/IHttp";


export class UploadControler implements IController {
    handler(request: IHttpRequest): Promise<IHttpResponse> {
        throw new Error("Method not implemented.");
    }

}