import { PrismaClient } from "@prisma/client";


/**
 * Clase padre/abstracta usada para la instanciación del cliente de Prisma 
 * y poder ser heredada por sus clases hijas
*/

abstract class Controller{

    protected prismaDB : PrismaClient;

    constructor(){
        this.prismaDB = new PrismaClient();
    }
}


export default Controller;