import { Request, Response } from "express";
import Controller from "./Controller";

class Especialidad extends Controller{

    constructor(){
        super();
    }

    /**
     * Obtiene el listado de todas las especialidades
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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

    /**
     * Obtiene la información de una especialidad obteniéndola por ID
     * @param req objeto donde se almacenará toda la info de la petición
     * @param res objeto que se usará para retonar la información y el código de estado
     * @returns objeto json con la información almacenada y valor booleano si se ejecutó correctamente
    **/

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