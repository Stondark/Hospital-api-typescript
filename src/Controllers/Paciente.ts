import { Request, Response } from "express";
import Controller from "./Controller";

class Paciente extends Controller{

    constructor(){
        super();
    }

    /**
     * Obtiene el listado de todos los pacientes
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Obtiene la información de un paciente obteniéndola por cédula
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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
     * @param req el body debe venir en formato {'data': []} donde dentro del array se incluirán n cantidad 
     * de registros a insertar en la base de datos
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json indicando la cantidad de datos almacenados y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Actualiza la información de un paciente por cédula
     * @param req.body debe venir en formato {'data': []} donde dentro del array se incluirá
     * la nueva información
     * @param req.param será la cédula del paciente a actualizar 
     * @param res res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json mostrando la nueva información actualizada y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Elimina un paciente por número de cédula
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información eliminada y valor booleano si se ejecutó correctamente
    **/


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