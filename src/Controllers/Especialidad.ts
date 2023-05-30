import { Request, Response } from "express";
import Controller from "./Controller";

class Especialidad extends Controller{

    constructor(){
        super();
    }

    async findEspecialidad(req : Request, res : Response) {
        try {
            const especialidad = await this.prismaDB.especialidad.findMany();

            if(especialidad.length == 0){
                throw new Error("No se encuentran registros para Médico");
            }

            res.json({success: true, data: especialidad});
        } catch (e: any) {
            res.status(400).json({success: true, error: e});
        }
    }

    async findEspecialidadById(req : Request, res : Response) {
        const id = Number(req.params.id);
        try {
            const especialidad = await this.prismaDB.especialidad.findUnique({
                where: {
                    idEspecialidad: id
                }
            });

            if(!especialidad){
                throw new Error("Registro no encontrado");
            }

            res.json({success: true, data: especialidad});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }
}

export default Especialidad;