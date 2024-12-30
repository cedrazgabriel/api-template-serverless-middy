import { UploadControler } from "../../application/controllers/upload-controller";
import { makeHandler } from "../middy/make-handler";

export const handler = makeHandler(new UploadControler());