import { IHttpRequest, IHttpResponse } from "./IHttp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IController<TBody extends Record<string, any> | undefined = undefined> {
    handler(request: IHttpRequest<TBody>): Promise<IHttpResponse>
}