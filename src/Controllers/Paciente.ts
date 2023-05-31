import { Request, Response } from "express";
import Controller from "./Controller";

class Paciente extends Controller{

    constructor(){
        super();
    }

    async findPacient(req : Request, res : Response) {
        try {
            const pacients = await this.prismaDB.paciente.findMany();
            
            if(pacients.length == 0){
                throw new Error("No se encuentran registros para Pacientes");
            }

            res.json({success: true, data: pacients});
        } catch (e: any) {
            res.status(400).json({success: true, error: e.message });
        }
    }

    async findPacientById(req : Request, res : Response) {
        const id = Number(req.params.id);
        try {
            const pacients = await this.prismaDB.paciente.findUnique({
                where: {
                    cedula: id
                }
            });

            if(!pacients){
                throw new Error("Registro no encontrado");
            }

            res.json({success: true, data: pacients});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    /**
     * Se crea uno o varios registros en la base de datos
     * @param req debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res 
     */

    async cratePacient(req : Request, res : Response) {
        const { data } =  req.body;

        try {
            const pacients = await this.prismaDB.paciente.createMany({
                data: data,
                skipDuplicates: true
            });

            if(pacients.count == 0){
                throw new Error("Registro no insertado");
            } 

            res.json({success: true, data: pacients});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    async updatePacient(req : Request, res : Response) {

        const id = Number(req.params.id);
        const { data } =  req.body;
        try {

            const validId = await this.prismaDB.paciente.findUnique({
                where: {
                  cedula: id,
                },
              });

            if(!validId){
                throw new Error("Registro no encontrado");
            }

            const pacients = await this.prismaDB.paciente.update({
                where: {
                    cedula: id
                },
                data: data
            });

            res.json({success: true, data: pacients});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    async removePacient(req : Request, res : Response) {

        const id = Number(req.params.id);

        try {

            const validId = await this.prismaDB.paciente.findUnique({
                where: {
                  cedula: id,
                },
              });

            if(!validId){
                throw new Error("Registro no encontrado");
            }

            const pacients = await this.prismaDB.paciente.delete({
                where: {
                    cedula: id
                }
            });

            if(!pacients){
                throw new Error("El registro no se pudo eliminar");
            }

            res.json({success: true, data: pacients});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }


}

export default Paciente;