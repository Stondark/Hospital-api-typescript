import express, { Application }  from "express";
import cors from "cors";
import PacienteRouter  from "./Routes/Paciente.routes";

import "dotenv/config";
const PORT = process.env.PORT || 3001;

class App{

    public app: Application;

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
        this.app.use(PacienteRouter);
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log(`App iniciada en el puerto ${PORT}`);
        })
    }

}

export default App;