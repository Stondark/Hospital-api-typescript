import { Request, Response, NextFunction } from "express";
import Token from "../utils/Token";

class Session{

    /**
     * Valida la existancia y validez de un JWT
     * @param req.headers.authorization sitio del objeto donde está almacenado el JWT 
     * @param res envia un código 400 en caso de que el JWT falle
     * @param next continúa con la petición en caso de que el JWT sea válido
     */

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