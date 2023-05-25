import { PrismaClient } from "@prisma/client";


/**
 * Clase padre usada para la instanciación del cliente de Prisma
 */

abstract class Controller{

    protected prismaDB : PrismaClient;

    constructor(){
        this.prismaDB = new PrismaClient();
    }
}


export default Controller;