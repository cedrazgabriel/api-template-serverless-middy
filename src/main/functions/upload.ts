import { makeUploadControler } from "../factories/make-upload-controller";
import { makeHandler } from "../middy/make-handler";

export const handler = makeHandler(makeUploadControler());