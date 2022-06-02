import * as grpc from "@grpc/grpc-js";
import "dotenv/config";
import { PBConfig } from "../config/proto-configs";

const proto_configs = new PBConfig("kobeni");
const kobeni = proto_configs.configPackage();
const kobeniClient = new kobeni.userPackage.UserService(`${process.env.KOBENI_HOST}:${process.env.KOBENI_PORT}`, grpc.credentials.createInsecure())

export { kobeniClient };
