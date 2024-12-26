import middy from "@middy/core";

type Handler = (event: any) => Promise<any>

export function makeHandler(handler : Handler) {
    return middy().handler(handler)
}