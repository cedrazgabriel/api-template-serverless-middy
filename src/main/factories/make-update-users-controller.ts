import { UpdateUserController } from "../../application/controllers/update-user-controller";

export function makeUpdateUsersController() {
    return new UpdateUserController();
}