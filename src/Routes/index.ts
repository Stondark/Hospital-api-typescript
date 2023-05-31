import { Router } from "express";
import { readdirSync } from "fs";
import Logger from "../middleware/Logger";

class RouterCont{

    public router : Router;
    private path : string; 

    constructor(){
        this.router = Router();
        this.path = `${__dirname}`;
        this.createRoutes();
    }

    /**
     * Lee el nombre de todos los archivos de la carpeta actual
     * crea una ruta con el nombre del archivo y pasa las rutas creadas en las clases hijas
     * como middleware para poder ser usadas
    **/

    private createRoutes(): void {
        const dirReader = readdirSync(this.path).filter((fileName) => {
            const cleanName = this.cleanFileName(fileName);
            if(cleanName !== 'index'){
                import(`./${cleanName}`).then((module) => { 
                    const moduleRouter = module.default;
                    this.router.use(`/${cleanName}`, Logger.consoleRequest, moduleRouter);
                })
            }
        })
    }

    /**
     * Quita la extensión del nombre del archivo 
     * @param fileName string que contiene el nombre del archivo (medico.ts)
     * @returns nombre del archivo sin extensión (medico)
     */

    private cleanFileName(fileName : string) {
        return fileName.split('.').shift();
    }

    /**
     * @returns retorna la propiedad router con todas las rutas creadas 
    **/

    public getRoutes(){
        return this.router;
    }


}

export default RouterCont;

