import express from "express";
import { Response } from "../utils/response";
import { AdminController } from "../controller/admin.controller";


export class AdminRoutes{

    public static express = express;
    public static app:any;

    static routes =  ()=>{

        AdminRoutes.app = express.Router()

        AdminRoutes.app.get("/view/:id",async (request:any,response:any)=>{

            let payload = {
                id:request.params.id
            }

            let data = await AdminController.controls.fetch(payload)

            let resp:Response = {
                error:"",
                response:"SUCCESS",
                responseData:[],
                status:200
            }

            response.send(resp)
        })

        return AdminRoutes.app
    }
}