import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import router from "./teams/route/route";
const app = express()

import { initDB } from './data_base/data_base'
const { PORT } = process.env;

initDB()

app.use(cors({
    origin: "*",
}))
app.use(bodyParser.json())

app.get("/WORKING!!!", async (req, res) => {
    return res.send("Api is working!");
});

// app.use(logger)  // midlewere

// app.get('/', (req, res) => {
//     console.log('here')
//     res.json({ message: "hey" })
// })

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
})
