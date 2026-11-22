
// Server create krna


// require('dotenv).config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({path: "./env" });


connectDB()
.then(() => { // Jab Promise successfully resolve hota hai, tab .then() execute hota hai.
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => { // Jab Promise reject hota hai, tab .catch() execute hota hai.
    console.log("Mongo.db Connection failed ", err);
})

























/*
import express from "express"

const app = express()

( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR", error)
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log(`app is listenning on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
    */


