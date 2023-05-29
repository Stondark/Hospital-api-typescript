import { Request, Response, NextFunction } from "express";
import Token from "../utils/Token";

class Session{

    public static checkJWT(req: Request, res: Response, next: NextFunction){
        try {
            const jwtHeader = req.headers.authorization ?? null; 
            const jwt = jwtHeader?.split(" ").pop();
            const valJwt = Token.verifyToken(`${jwt}`);

            if(!valJwt){
                throw new Error("JWT INVALID");
            }

            next();
        } catch (e) {
            res.status(400).send({success : false, error: `INVALID SESSION ${e}`})
        }
    }

}

export default Session;