import express, { Application }  from "express";
import cors from "cors";
import RouterCont from "./Routes/index";

import "dotenv/config";

const PORT = process.env.PORT || 3001;

class App{

    public app: any;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    
    private config(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void{
        const routerCont = new RouterCont();
        const routex = routerCont.getRoutes();
        // this.app.use(routerCont);
        this.app.use(routex);
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`App iniciada en el puerto ${PORT}`);
        })
    }

}

export default App;