import { PrismaClient } from "@prisma/client";

abstract class Controller{

    protected prismaClient : PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }
}


export default Controller;