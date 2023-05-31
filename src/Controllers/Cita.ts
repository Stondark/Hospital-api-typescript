import { Request, Response } from "express";
import Controller from "./Controller";

class Cita extends Controller{

    constructor(){
        super();
    }

    /**
     * Obtiene el listado de todas las citas
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

    async findCitas(req : Request, res : Response) {
        try {
            const citas = await this.prismaDB.cita.findMany({
                include: {
                    paciente: true,
                    medico: true
                }
            });
            
            if(citas.length == 0){
                throw new Error("No se encuentran registros para Citas");
            }

            res.json({success: true, data: citas});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    /**
     * Obtiene la información de una cita obteniéndola por ID
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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
     * @param req el body debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json indicando la cantidad de datos almacenados y valor booleano si se ejecutó correctamente
     */

    async createCita(req : Request, res : Response) {
        const { data } =  req.body;

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
            } 

            res.json({success: true, data: citas});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    /**
     * Elimina una Cita por número de cita
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información eliminada y valor booleano si se ejecutó correctamente
    **/

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