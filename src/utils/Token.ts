import { sign, verify } from "jsonwebtoken";


class Token{

    static JWT_SECRET = process.env.JWT_SECRET ?? 'aRYLE';

    static generateToken(id : number){
        let expireConfig = {
            expiresIn: "2h"
        };

        return sign({id}, Token.JWT_SECRET, expireConfig);
    }
    
    static verifyToken(jwt : string){
        return verify(jwt, Token.JWT_SECRET);
    }
}

export default Token;