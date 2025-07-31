import express from "express";
import { Routes } from "./middlewares/routes.middleware";
import { AdminRoutes } from "./routes/admin.routes";

export class AppComponent{
    private app:any;
    constructor(){
        this.app = express();
    }

    middleware(){

        this.app.use("/admin",AdminRoutes.routes())

        this.app.use((request:any,response:any)=>{
                response.send(Routes.defaultRoutes())
        });



    }

    start(){
        this.middleware();
        this.run()
    }

    run(){
        this.app.listen(3200,()=>{
            console.log("Application running at http://localhost:3200/")
        })
    }

}

new AppComponent().start()