import mongoose from "mongoose";
import validator from "validator";

const loginData = new mongoose.Schema({

    
    email:{
        type:String,
        unique:true,
        required :[true, "Email required"],
        validate:{
            validator:validator.isEmail,
            message:"invalid email",

        }
    },
    password:{
        type : String,
        required:[true,"password requires"]
    },
    confirmPassword:{
        type : String,
        required:[true," confirm password requires"]
    },

    id: {
        type: String,
        unique:true,
        required: [true]
    }, // The user's id
    username: {
        type: String,
        required: [true]
    },
    name: {
        type: String,
       
    },
    phone: {
        type: String,
        unique:true,
        required: [true]
       
    },
    website: {
        type: String,
        required: [true]
    },
    address: {
        street: {
            type: String,
           
        }, // Address line 1
        suite: {
            type: String,
            
        }, // Address line 2
        city: {
            type: String,
           
        },
        zipcode: {
            type: Number,
           
        }
    },
    company: {
        name: {
            type: String,
           
        }, // The name of company where the user works
    }
});

const LoginData = new mongoose.model("Login", loginData);
export default LoginData;


   