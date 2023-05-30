import { Router } from "express";
import RouterCont from "./index";
import Medico from "../Controllers/Medico";
import Session from "../middleware/Session";
import { validateCreate } from "../validators/medico";
import { validateParams } from "../validators/general";


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
    this.router.get("/", Session.checkJWT, this.medicoController.findMedico.bind(this.medicoController));
    this.router.get("/:id", validateParams, Session.checkJWT, this.medicoController.findMedicoById.bind(this.medicoController));
    this.router.post("/", validateCreate, Session.checkJWT, this.medicoController.crateMedico.bind(this.medicoController));
    this.router.put("/:id", validateParams, validateCreate ,Session.checkJWT, this.medicoController.updateMedico.bind(this.medicoController));
    this.router.delete("/:id", validateParams, Session.checkJWT, this.medicoController.removeMedico.bind(this.medicoController));
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new MedicoRouter().getRoutes();

