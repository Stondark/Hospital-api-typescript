import { sign, verify } from "jsonwebtoken";


class Token{

    static JWT_SECRET = process.env.JWT_SECRET ?? 'aRYLE';

    /**
     * Genera un token con duración de 2h y creado con una lleva secreta almacenada en .env
     * @param id id del funcionario el cuál está ejecutando la petición
     * @returns JWT
     */

    static generateToken(id : number){
        let expireConfig = {
            expiresIn: "2h"
        };

        return sign({id}, Token.JWT_SECRET, expireConfig);
    }
    
    /**
     * Valida que el JWT de la petición sea válido
     * @param jwt string jwt pasado en la petición
     * @returns valores truthy en caso de que sea válido y falsy en caso de que no sea válido
     */

    static verifyToken(jwt : string){
        return verify(jwt, Token.JWT_SECRET);
    }
}

export default Token;