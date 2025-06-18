const mongoose=require("mongoose");

const EmployeeDetail=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },

        sem:{
            type:String,
            require:false,
        },

        email:{
            type:String,
            require:false,
        },

        password:{
            type:String,
            require:false,
        },
    },
    {timestamps:true}
);

const Employeenewdetail=mongoose.model("users",EmployeeDetail);
module.exports=Employeenewdetail;