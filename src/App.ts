import express, { Application }  from "express";
import cors from "cors";
import RouterCont from "./Routes/index";

import "dotenv/config";

const PORT = process.env.PORT ?? 3001;

class App{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    /**
     * Configuración de express
     */

    private config(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    /**
     * Definición de rutas
     */

    private routes(): void{
        const routerCont = new RouterCont();
        const routers = routerCont.getRoutes();
        this.app.use(routers);
    }

    /**
     * Ejecutar servidor
     */

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`App iniciada en el puerto ${PORT}`);
        })
    }

}

export default App;