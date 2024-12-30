import { s3Cliente } from "../../application/clients/s3-client";
import { UploadControler } from "../../application/controllers/upload-controller";

export function makeUploadControler() {
    return new UploadControler(s3Cliente);
}