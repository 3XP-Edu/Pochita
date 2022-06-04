import { UserController } from "../../controllers/UserController";
import MasterRoutes from "../master-routes";

export default class UserRoutes extends MasterRoutes {
  constructor() {
    super(new UserController());
    this.endpoint = '/users';
  }

}
