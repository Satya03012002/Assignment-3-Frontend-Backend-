import express from "express";
import bodyParser from "body-parser";
import path from "path";
import "./db/dbConn.js";
import cors from 'cors';
import SignInRouter from "./router/loginRequest/router.js";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/signin",SignInRouter);

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// seving thee frontend

app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*", function(_,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),(err)=>{
            res.status(500).send(err)
        }
    )
})

console.log(__dirname);

app.listen(PORT,()=>{
    console.log(`server running successfully on PORT : ${PORT}`)
});


