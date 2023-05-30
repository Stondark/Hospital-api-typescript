import { Router } from "express";
import RouterCont from "./index";
import Cita from "../Controllers/Cita";
import Session from "../middleware/Session";
import { validateParams } from "../validators/general";
import { validateCreate } from "../validators/cita";

class EspecialidadRouter extends RouterCont {
  
  private citaController: Cita;

  constructor() {
    super();
    this.citaController = new Cita();
    this.router = Router();
    this.routes();
  }

  /**
   * Función que genera las rutas y llama la instancia del controlador 
   * haciendo referencia al objeto Medico mediante Bind
   */

  protected routes(): void {
    this.router.get("/", Session.checkJWT, this.citaController.findCitas.bind(this.citaController));
    this.router.get("/:id", validateParams , Session.checkJWT, this.citaController.findCitaById.bind(this.citaController));
    this.router.post("/", validateCreate , Session.checkJWT, this.citaController.createCita.bind(this.citaController));
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new EspecialidadRouter().getRoutes();

