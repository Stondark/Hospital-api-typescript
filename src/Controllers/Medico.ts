import { Request, Response } from "express";
import Controller from "./Controller";

class Medico extends Controller{

    constructor(){
        super();
    }

    /**
     * Obtiene el listado de todos los médicos
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Obtiene la información de un médico obteniéndola por cédula
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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
     * @param req el body debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json indicando la cantidad de datos almacenados y valor booleano si se ejecutó correctamente
    **/

    async crateMedico(req : Request, res : Response) {
        const { data } =  req.body;

        try {
            const medico = await this.prismaDB.medico.createMany({
                data: data,
                skipDuplicates: true
            });

            if(medico.count == 0){
                throw new Error("Registro no insertado");
            } 

            res.json({success: true, data: medico});
        } catch (e: any) {
            res.status(400).json({success: false, error: e.message });
        }
    }

    /**
     * Actualiza la información de un médico por cédula
     * @param req.body debe venir en formato {'data': []} donde dentro del array se incluirá
     * la nueva información
     * @param req.param será la cédula del médico a actualizar 
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json mostrando la nueva información actualizada y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Elimina un médico por número de cédula
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información eliminada y valor booleano si se ejecutó correctamente
    **/

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