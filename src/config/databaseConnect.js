import mongoose from "mongoose";

class DatabaseConnect {

    static instance = undefined

    constructor(){
        if (!DatabaseConnect.instance) {
            DatabaseConnect.instance = this;
        }
        this.my = 'steve'
        this.connections = new Map()
    }
    createConnection(user, password, nameDataBase) {

        return new Promise((resolve,reject)=>{
            const uri = this.replaceUriMongo(user, password, nameDataBase);
    
            const conn=mongoose.createConnection(uri)

            console.log(`Open Database ${nameDataBase}`)

            conn.on('connected', () => {
                console.log(`Connect Database ${nameDataBase}`)
                resolve(true)
            });
            conn.on('close', () => console.log('close'));
            conn.on('disconnected', () => console.log('disconnected'));
            conn.on('reconnected', () => console.log('reconnected'));
            conn.on('disconnecting', () => console.log('disconnecting'));
            conn.on('open', ()=> console.log(""));
            conn.on('error', (err) => reject(err));
            this.connections.set(nameDataBase, conn);
        })
    }
    replaceUriMongo(...values){
        console.log(...values)
        let uri = process.env.NODE_ENV === "development" ? process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_CLOUD

        uri = uri.replace("<<name>>",values[0])
        uri = uri.replace("<<password>>",values[1])
        uri = uri.replace("<<nameDatabase>>",values[2])

        return uri
    }
    static getInstance() {
        if (!DatabaseConnect.instance) {
            DatabaseConnect.instance = new DatabaseConnect();
        }
        return DatabaseConnect.instance;
    }
    getConnection(nameDataBase){
        return this.connections.get(nameDataBase)
    }
}



export default DatabaseConnect.getInstance()