import { IHttpRequest, IHttpResponse } from "./IHttp";

export interface IController<TBody extends Record<string, unknown>> {
    handler(request: IHttpRequest<TBody>): Promise<IHttpResponse>
}