import {Router} from "express";

export default class MasterRoutes {
  protected endpoints: Object;
  public router: Router;
  public endpoint: string;
  protected controller: any /* define as master controller type */;
  constructor(controller: any /* define as master controller type */) {
    this.controller = controller;
    this.router = Router();
    this.endpoints = {
      create: {
        endpoint: this.router.post("/", this.controller.create),
      },
      read: {
        endpoint: this.router.get("/", this.controller.readAll),
      },
      readOne: {
        endpoint: this.router.get("/:id", this.controller.readOne),
      },
      update: {
        endpoint: this.router.put("/:id", this.controller.update),
      },
      delete: {
        endpoint: this.router.delete("/:id", this.controller.delete),
      },
    };

    this.endpoint = "";
  }
}
