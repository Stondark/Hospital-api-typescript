import { Request, Response } from "express";
import Controller from "./Controller";
import Crypt from "../utils/Crypt";
import Token from "../utils/Token";

class Funcionario extends Controller{

    constructor(){
        super();
    }

    private async validateExist(user : string){
        const confirm = await this.prismaDB.funcionario.findFirst({
            where: {
                username: user
            }
        });
    
        return confirm;
    }

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