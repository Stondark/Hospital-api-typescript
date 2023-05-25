import { Request, Response } from "express";
import Controller from "./Controller";

class Medico extends Controller{

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

    /**
     * Se crea uno o varios registros en la base de datos
     * @param req debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res 
     */

    async crateMedico(req : Request, res : Response) {
        const { data } =  req.body;
        const length_data = Object.keys(data).length;

        try {
            const medico = await this.prismaDB.medico.createMany({
                data: data,
                skipDuplicates: true
            });

            if(medico.count == 0){
                throw new Error("Registro no insertado");
            } else if (medico.count != length_data) {
                throw new Error(`Se insertó solo ${medico.count} registros de ${length_data}`);
            }

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    async updateMedico(req : Request, res : Response) {

        const id = Number(req.params.id);
        const { data } =  req.body;
        try {

            const validId = await this.prismaDB.medico.findUnique({
                where: {
                  cedula: id,
                },
              });

            if(!validId){
                throw new Error("Registro no encontrado");
            }

            const medico = await this.prismaDB.medico.update({
                where: {
                    cedula: id
                },
                data: data
            });

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    async removeMedico(req : Request, res : Response) {

        const id = Number(req.params.id);

        try {

            const validId = await this.prismaDB.medico.findUnique({
                where: {
                  cedula: id,
                },
              });

            if(!validId){
                throw new Error("Registro no encontrado");
            }

            const medico = await this.prismaDB.medico.delete({
                where: {
                    cedula: id
                }
            });

            if(!medico){
                throw new Error("El registro no se pudo eliminar");
            }

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }


}

export default Medico;