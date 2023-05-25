import { Router } from "express";
import RouterCont from "./index";
import Paciente from "../Controllers/Paciente";

class PacienteRouter extends RouterCont {
  
  private pacienteController: Paciente;

  constructor() {
    super();
    this.pacienteController = new Paciente();
    this.router = Router();
    this.routes();
  }

  /**
   * Función que genera las rutas y llama la instancia del controlador 
   * haciendo referencia al objeto Paciente mediante Bind
   */

  protected routes(): void {
    this.router.get("/",  this.pacienteController.findPacient.bind(this.pacienteController));
    this.router.get("/:id", this.pacienteController.findPacientById.bind(this.pacienteController));
    this.router.post("/",  this.pacienteController.cratePacient.bind(this.pacienteController));
    this.router.put("/:id", this.pacienteController.findPacientById.bind(this.pacienteController));
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new PacienteRouter().getRoutes();

