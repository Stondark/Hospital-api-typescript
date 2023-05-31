import { hash, compare } from "bcryptjs";

class Crypt{

    /**
     * Encripta una contraseña pasada como string
     * @param pass contraseña obtenida de la base de datos
     * @returns contraseña encriptada
     */

    static async enCrypt(pass : string) {
        const passwordHash = await hash(pass, 8);
        return passwordHash;
    }

    /**
     * Valida que la contraseña proporcionada sea igual a la contraseña encryptada
     * @param pass contraseña sin encriptar
     * @param passHash contraseña encriptada guardada en la base de datos
     * @returns valores truthy en caso de que sean iguales y falsy en caso de que no sean iguales
     */

    static async compareCrypt(pass: string, passHash: string){
        return await compare(pass, passHash);
    }
}

export default Crypt;
