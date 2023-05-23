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
   * hola
   */
  public hola() {
    console.log("hOLA");
  }

  protected routes(): void {
    this.router.get("/", this.hola);
    this.router.get("/adios", this.hola);
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new PacienteRouter().getRoutes();

