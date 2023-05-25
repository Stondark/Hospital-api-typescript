import { Request, Response } from "express";
import Controller from "./Controller";

class Funcionario extends Controller{

    constructor(){
        super();
    }

    async findMedico(req : Request, res : Response) {
        try {
            const medico = await this.prismaDB.medico.findMany({
                include: {
                    especialidad: true
                }
            });

            if(medico.length == 0){
                throw new Error("No se encuentran registros para Médico");
            }

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: true, error: e});
        }
    }

    async findMedicoById(req : Request, res : Response) {
        const id = Number(req.params.id);
        try {
            const medico = await this.prismaDB.medico.findUnique({
                where: {
                    cedula: id
                }
            });

            if(!medico){
                throw new Error("Registro no encontrado");
            }

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }


}

export default Funcionario;