import { Router } from "express";
import RouterCont from "./index";
import Medico from "../Controllers/Medico";

class MedicoRouter extends RouterCont {
  
  private medicoController: Medico;

  constructor() {
    super();
    this.medicoController = new Medico();
    this.router = Router();
    this.routes();
  }

  /**
   * Función que genera las rutas y llama la instancia del controlador 
   * haciendo referencia al objeto Medico mediante Bind
   */

  protected routes(): void {
    this.router.get("/",  this.medicoController.findMedico.bind(this.medicoController));
    this.router.get("/:id", this.medicoController.findMedicoById.bind(this.medicoController));
    this.router.post("/",  this.medicoController.crateMedico.bind(this.medicoController));
    this.router.put("/:id", this.medicoController.updateMedico.bind(this.medicoController));
    this.router.delete("/:id", this.medicoController.removeMedico.bind(this.medicoController));
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new MedicoRouter().getRoutes();

