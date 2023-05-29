import { hash, compare } from "bcryptjs";

class Crypt{

    static async enCrypt(pass : string) {
        const passwordHash = await hash(pass, 8);
        return passwordHash;
    }

    static async compareCrypt(pass: string, passHash: string){
        return await compare(pass, passHash);
    }
}

export default Crypt;
