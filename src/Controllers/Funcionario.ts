import { Request, Response } from "express";
import Controller from "./Controller";
import Crypt from "../utils/Crypt";
import Token from "../utils/Token";

class Funcionario extends Controller{

    constructor(){
        super();
    }

    /**
     * Valida que el usuario exista en el sistema
     * @param user nombre de usuario que se usará para realizar la consulta
     * @returns json que contendrá la información del usuario 
     * @returns en caso de que no exista retornará null
     */

    public async validateExist(user : string){
        const confirm = await this.prismaDB.funcionario.findFirst({
            where: {
                username: user
            }
        });
    
        return confirm;
    }

    /**
     * Crea un nuevo funcionario en la base de datos,
     * validando que no exista su username y encriptando su contraseña
     * @param req el body debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json indicando la cantidad de datos almacenados y valor booleano si se ejecutó correctamente
    **/

    async createFuncionario(req : Request, res : Response) {
        console.log(req.body);
        let { data } = req.body;
        try {

            const findUsername = await this.validateExist(data.username);

            if(findUsername){
                throw new Error("Este usuario ya existe");
            }
    
            let hashedPassword = await Crypt.enCrypt(data.password);
    
            const create = await this.prismaDB.funcionario.create({
                data: {
                    nombre: data.nombre,
                    password: hashedPassword,
                    username: data.username
                }
            });
    
            if(!create){
                throw new Error("Ocurrió un error al crear este usuario");
            }
    
            res.json({'success': true, data: create});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
        
    }

    /**
     * Valida el usuario y la contraseña del login
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con un JWT y valor booleano si se ejecutó correctamente
    **/

    async loginFuncionario(req : Request, res : Response) {
        let { data } = req.body;

        try {
            const findUsername = await this.validateExist(data.username);
    
            if(!findUsername){
                throw new Error("Este usuario no existe");
            }

            if (typeof findUsername.password !== 'string') {
                throw new Error("Nombre de usuario no válido");
            }

            let hashedPassword = await Crypt.compareCrypt(data.password, findUsername.password);

            if(!hashedPassword){
                throw new Error("Contraseña incorrecta");
            }

            const token = Token.generateToken(findUsername.idFuncionario);

            res.json({'success': true, data: token});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }


}

export default Funcionario;