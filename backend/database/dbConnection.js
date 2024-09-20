import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant"
    }).then(()=>{
        console.log("Connected to database successfully")
    }).catch(err=>{
        console.log(`fSome error occurred while connecting to database! ${err}`);
    });
};