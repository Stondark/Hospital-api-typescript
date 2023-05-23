import { Router } from "express";
import { readdirSync } from "fs";
import { ModuleKind } from "typescript";

class RouterCont{

    public router : Router;
    private path : string; 


    constructor(){
        this.router = Router();
        this.path = `${__dirname}`;
        this.createRoutes();
    }

    private createRoutes() {
        const dirReader = readdirSync(this.path).filter((fileName) => {
            const cleanName = this.cleanFileName(fileName);
            if(cleanName !== 'index'){
                console.log(`Se está cargando la ruta ${cleanName}`)
                import(`./${cleanName}`).then((module) => { // Obtén el enrutador desde el módulo
                    const moduleRouter = module.default;
                    this.router.use(`/${cleanName}`, moduleRouter);

                })
            }

        })
    }

    public getRoutes(){
        return this.router;
    }

    private cleanFileName(fileName : string) {
        const file = fileName.split('.').shift();
        return file;
    }

}

export default RouterCont;

