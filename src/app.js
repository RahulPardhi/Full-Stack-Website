
// Express create krna 


// export 3 libraries 

import express from "express" // it is a node.js framework used to crate backend and APIs. 

import cors from "cors" /*CORS Stands for Cors-origin Resource Sharing.
 CORS frontend ko backend se communication karne ki permision configure krta hai */ 

import cookieParser from "cookie-parser" /* cookie Parser ek middleware hai.
 jo incomming request ki cookies ko read aur parse keta hai */


const app = express() // ye Express Application create krta hai
// Remember express library hai aur. App us library se create hua aplication hai.


app.use(cors({
    origin: process.env.CORS_ORIGIN, // iska mtlb hai ki kaunsa frontend tumhare backend ko access kr skta hai eg. .env file. http://localhost:8000
    credentials: true /* frontend or backend dono taraf credentials enable hone chaiye.
                         CORS origin mein * use nhi kar skte jab credentials true hon.*/
}))

// configuration 

app.use(express.json({limit: "16kb"})) // ye middleware incoming JSON data ko read aur parse krta hai.

app.use(express.urlencoded({
    extended: true, // ye middleware HTML forms se aane wale URL-encoded ko parse krta hai
    limit: "16kb"
}))

app.use(express.static("public")) //ye backend ke public folder ki static files ko directly browser mein access krne deta hai

app.use(cookieParser()) // jab browseer backend ko cookies send krta hai, cookie parser unhe read krne me help krta hai.


export{ app } // hum apne express application ko dusri files me use karne ke liye export ker rahe hain