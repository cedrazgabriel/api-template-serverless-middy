// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IHttpRequest<TBody extends Record<string, any> | undefined> {
    body: TBody
    headers?: Record<string, string>
    params?: Record<string, string>
}

export interface IHttpResponse {
    statusCode: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: Record<string, any>
    headers?: Record<string, string>
}