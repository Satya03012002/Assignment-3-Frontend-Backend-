import bcrypt from 'bcrypt'
import LoginData from '../../schema/login.js';

export const signIn = async(req,res)=>{
    try{
        const {email,password,confirmPassword,id,username,name,phone,website} = req.body;

        console.log(req.body)
        console.log(req.body)
        if(password == confirmPassword){
            const hashPassword = await bcrypt.hash(password,10);
            const result = await LoginData.findOne({email});
            if(!result){
                const data = await  new LoginData({email,password:hashPassword,confirmPassword,id,username,name,phone,website});
                await data.save();
                
                console.log("signUp successfully");
                return res.status(201).json({data});

            }else{
                return res.status(205).json({message:"user account already exist"});
            }
        }else{
            return res.status(401).json({message:"invalid details"}); 
        }


    }catch(err){
        console.log({"message":err})
    }
    

}



export const getdata = async(req,res)=>{
  
   
    try{

        const data = await LoginData.find({})
        if(data){
          
            res.status(200).json(data);
        }else{
            res.status(404).json({"message" :" not found"});  
        }
    }catch(err){
        console.log(err)
    }
}