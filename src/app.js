import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("jawad mughal")
})
app.use("/api/v1/user", (req, res) => {
    res.send("jawad mughal ilyas")
})

export { app }