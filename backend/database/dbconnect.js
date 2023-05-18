import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/registro-login-database"

const connectDataBase = async ()  => { 

    try { 
        const db = await mongoose.connect(URI , { 
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          console.log("---> ❤ ❤ Conectado a registro-login-database ❤ ❤ <----")
    } catch(err)
 { 
    console.log(`ERROR ${err.message}`)
 }  
    
} 

export default connectDataBase;