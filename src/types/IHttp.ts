export interface IHttpRequest {
    body?: Record<string, any>
    headers?: Record<string, string>
}

export interface IHttpResponse {
    statusCode: number
    body?: Record<string, any>
    headers?: Record<string, string>
}