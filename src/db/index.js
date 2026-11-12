
// Databse create krna 


import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST : $ {connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
    }
}
export default connectDB

.then(() => { // Jab Promise successfully resolve hota hai, tab .then() execute hota hai.
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : $ {process.env.PORT}`);
    })
})
.catch((err) => { // Jab Promise reject hota hai, tab .catch() execute hota hai.
    console.log("Mongo.db Connection failed ", err);
})
