import { Router } from "express";
import { UserController } from "./controllers/UserController";

//abstrair todo esse código
const router = Router();

const userController = new UserController();

router.post("/users", userController.create);
router.get("/users", userController.readAll);
router.get("/users/:id", userController.readOne);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

export { router };
