import { Router } from "express";
import RouterCont from "./index";
import Paciente from "../Controllers/Paciente";
import { validateParams } from "../validators/general";
import { validateCreate } from "../validators/paciente";


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
    this.router.get("/", this.pacienteController.findPacient.bind(this.pacienteController));
    this.router.get("/:id", validateParams, this.pacienteController.findPacientById.bind(this.pacienteController));
    this.router.post("/", validateCreate, this.pacienteController.cratePacient.bind(this.pacienteController));
    this.router.put("/:id", validateCreate, validateParams, this.pacienteController.updatePacient.bind(this.pacienteController));
    this.router.delete("/:id", validateParams, this.pacienteController.removePacient.bind(this.pacienteController));
  }

  /**
   * @returns retorna la propiedad router con todas las rutas creadas y que así mismo es heredada de la clase RouterCont
  **/

  public getRoutes(): Router {
    return this.router;
  }
}

export default new PacienteRouter().getRoutes();

