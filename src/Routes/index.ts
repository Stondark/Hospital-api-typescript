import { Router } from "express";
import { readdirSync } from "fs";


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
                console.log(`Se está cargando la ruta ${cleanName}`)
                import(`./${cleanName}`).then((module) => { 
                    const moduleRouter = module.default;
                    this.router.use(`/${cleanName}`, moduleRouter);
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

