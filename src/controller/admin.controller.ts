import { AdminModel } from "../model/admin.model"

export class AdminController{

  public static  controls = {
        fetch:async (payload:any)=>{
            let conn = await AdminModel.model.fetch()
            return 
        },
        fetchAll:()=>{},
        add:()=>{},
        update:()=>{},
        remove:()=>{},
        removeAll:()=>{}
    }

}