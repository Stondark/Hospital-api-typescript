import { Request, Response, NextFunction } from "express";

class Logger{

    /**
     * Función para mostrar por consola las peticiones realizadas al servidor
     * @param req.headers se obtiene el user-agent de 
     * @param next continúa con la petición
     */

    public static consoleRequest(req: Request, res: Response, next: NextFunction){
        const headers = req.headers;
        const userAgent = headers['user-agent'];
        console.log('userAgent', userAgent);
        next();
    }
}

export default Logger;