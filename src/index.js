
import connectDB from "./db/index.js";
import dotenv from "dotenv";

 
dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is runnig at port: $ {process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGo db connection failed !!!", err);

})







/*import express from "express"
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process,env.PORT, () => {
            console.log(`app is listenig on poet ${process.env.PORT}`);
        })

    }catch(error){
        console.erroe("ERROR: ", error)
        throw error
    }

}) ()*/