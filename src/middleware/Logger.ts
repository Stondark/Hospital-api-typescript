import { Request, Response, NextFunction } from "express";

class Logger{

    public static consoleRequest(req: Request, res: Response, next: NextFunction){
        const headers = req.headers;
        const userAgent = headers['user-agent'];
        console.log('userAgent', userAgent);
        next();
    }
}

export default Logger;