import { MongooseConn } from "../utils/mongoose"

export class AdminModel{

    public static model = {

        fetch:async ()=>{
            let conn = await MongooseConn.createMongooseConn()
        },
        fetchAll:()=>{},
        add:()=>{},
        update:()=>{},
        remove:()=>{},
        removeAll:()=>{}
    }

}