import { Router } from "express";
import RouterCont from "./index";
import Funcionario from "../Controllers/Funcionario";



class AuthRouter extends RouterCont {
  
  private funcionarioController: Funcionario;

  constructor() {
    super();
    this.funcionarioController = new Funcionario();
    this.router = Router();
    this.routes();
  }

  /**
   * Función que genera las rutas y llama la instancia del controlador 
   * haciendo referencia al objeto Funcionario mediante Bind
  **/

  protected routes(): void {
    this.router.post("/create", this.funcionarioController.createFuncionario.bind(this.funcionarioController));
    this.router.post("/login", this.funcionarioController.loginFuncionario.bind(this.funcionarioController));
  }

  /**
   * @returns retorna la propiedad router con todas las rutas creadas y que así mismo es heredada de la clase RouterCont
  **/

  public getRoutes(): Router {
    return this.router;
  }
}

export default new AuthRouter().getRoutes();

