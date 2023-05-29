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

    private cleanFileName(fileName : string) {
        return fileName.split('.').shift();
    }

    public getRoutes(){
        return this.router;
    }


}

export default RouterCont;

