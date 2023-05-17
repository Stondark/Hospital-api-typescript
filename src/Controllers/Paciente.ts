import { Request, Response } from "express";
import Controller from "./Controller";


class Paciente extends Controller{
    async findPacient(req : Request, res : Response) {
        try {
            const pacients = await this.prismaClient.paciente.findMany();
            return res.json({success: true, data: pacients});
        } catch (error) {
            
        }
    }

}

export default Paciente;