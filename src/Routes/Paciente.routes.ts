import { Router, Request, Response  } from "express";
import Paciente from "../Controllers/Paciente";

class PacienteRouter{

    public router : Router;
    private base_url = '/pacientes';
    private pacienteController : Paciente;

    constructor(){
        this.router = Router();
        this.pacienteController = new Paciente();
        this.routes();
    }

    private routes() : void{
        this.router.get(this.base_url, (req : Request, res : Response) => {
            this.pacienteController.findPacient(req, res)
        });
    }


}

export default new PacienteRouter().router;