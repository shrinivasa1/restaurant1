const mongoose=require("mongoose");

const loginmodel=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
        },

        password:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);

const Customerloginmodel=mongoose.model("custmerregdetails",loginmodel);
module.exports=Customerloginmodel;