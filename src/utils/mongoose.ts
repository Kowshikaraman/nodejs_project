import  mongoose  from 'mongoose'

export class MongooseConn{

    protected static dbURI = 'mongodb://localhost:27017/mydatabase';
    protected static dbURIDocker:any = process.env.MONGO_URL

    constructor(){}

   static async  createMongooseConn(){
        let conn = await mongoose.connect(MongooseConn.dbURIDocker)
        if(conn){
            console.log("Connect to MongoDB")
            return conn
        }else{
            console.log("Error...",conn)
            return null
        }
    }

}