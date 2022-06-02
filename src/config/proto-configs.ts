import 'dotenv/config'
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from '../proto/kobeni';

export class PBConfig {
    public PORT: string;
    private PROTO_FILE: string;
    constructor(protoFile:string){
        this.PORT = process.env.MS_PORT || "3001";
        this.PROTO_FILE = `../proto/${protoFile}.proto`;
     }
    public configPackage(){
        const packageDef = protoLoader.loadSync(path.resolve(__dirname, this.PROTO_FILE));
        const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown ) as ProtoGrpcType;
        return grpcObj;
    }
};