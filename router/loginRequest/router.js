import express from "express";
import {signIn,getdata} from "./func.js"

const SignInRouter = express.Router()
SignInRouter.post("/",signIn);
SignInRouter.get("/data",getdata);

export default SignInRouter;