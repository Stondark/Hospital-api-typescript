import { Request, Response } from "express";
import Controller from "./Controller";

class Cita extends Controller{

    constructor(){
        super();
    }

    async findCitas(req : Request, res : Response) {
        try {
            const citas = await this.prismaDB.cita.findMany();
            
            if(citas.length == 0){
                throw new Error("No se encuentran registros para Pacientes");
            }

            res.json({success: true, data: citas});
        } catch (e: any) {
            res.status(400).json({success: true, error: e.message });
        }
    }

    async findCitaById(req : Request, res : Response) {
        const id = Number(req.params.id);
        try {
            const citas = await this.prismaDB.cita.findUnique({
                where: {
                    idCita: id
                }
            });

            if(!citas){
                throw new Error("Registro no encontrado");
            }

            res.json({success: true, data: citas});
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

    async createCita(req : Request, res : Response) {
        const { data } =  req.body;
        const length_data = Object.keys(data).length;

        try {

            const validPacient = await this.prismaDB.paciente.findUnique({
                where: {
                    cedula: data.idPaciente,
                },
              });

            if(!validPacient){
                throw new Error("Paciente no encontrado o no válido");
            }

            const validMedico = await this.prismaDB.medico.findUnique({
                where: {
                    cedula: data.idMedico,
                },
              });

            if(!validMedico){
                throw new Error("Médico no encontrado o no válido");
            }

            const citas = await this.prismaDB.cita.createMany({
                data: data,
                skipDuplicates: true
            });

            if(citas.count == 0){
                throw new Error("Registro no insertado");
            } else if (citas.count != length_data) {
                throw new Error(`Se insertó solo ${citas.count} registros de ${length_data}`);
            }

            res.json({success: true, data: citas});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    async removePacient(req : Request, res : Response) {

        const id = Number(req.params.id);

        try {

            const validId = await this.prismaDB.cita.findUnique({
                where: {
                    idCita: id,
                },
              });

            if(!validId){
                throw new Error("Registro no encontrado");
            }

            const citas = await this.prismaDB.cita.delete({
                where: {
                    idCita: id
                }
            });

            if(!citas){
                throw new Error("El registro no se pudo eliminar");
            }

            res.json({success: true, data: citas});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }


}

export default Cita;