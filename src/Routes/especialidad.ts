import { Router } from "express";
import RouterCont from "./index";
import Especialidad from "../Controllers/Especialidad";
import Session from "../middleware/Session";
import { validateParams } from "../validators/general";

class EspecialidadRouter extends RouterCont {
  
  private especialidadController: Especialidad;

  constructor() {
    super();
    this.especialidadController = new Especialidad();
    this.router = Router();
    this.routes();
  }

  /**
   * Función que genera las rutas y llama la instancia del controlador 
   * haciendo referencia al objeto Especialidad mediante Bind
   */

  protected routes(): void {
    this.router.get("/", Session.checkJWT, this.especialidadController.findEspecialidad.bind(this.especialidadController));
    this.router.get("/:id", validateParams , Session.checkJWT, this.especialidadController.findEspecialidadById.bind(this.especialidadController));
  }

  /**
   * @returns retorna la propiedad router con todas las rutas creadas y que así mismo es heredada de la clase RouterCont
  **/

  public getRoutes(): Router {
    return this.router;
  }
}

export default new EspecialidadRouter().getRoutes();

