import dotenv from "dotenv"
import { app } from "./src/app.js"
import { connectDb } from "./src/db/index.db.js"



dotenv.config({
    path: "./env"
})

const portConfiguration = process.env.PORT || 3000

connectDb().
    then(() => {
        app.on("error", () => {
            console.log("index js :: app.on :: error ", error)
        })
        app.listen(portConfiguration, () => {
            console.log("application is run on this port ", portConfiguration)
        })
    })
    .catch((error) => {
        console.log("index js :: error :: server run erro :: ", error)
    })