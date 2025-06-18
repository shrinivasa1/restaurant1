const mongoose = require("mongoose");

const Regmodel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
},
{ timestamps: true });

let Customerreg;

if (mongoose.models["custmerregdetails"]) {
    Customerreg = mongoose.model("custmerregdetails");
} else {
    Customerreg = mongoose.model("custmerregdetails", Regmodel);
}

module.exports = Customerreg;


// const mongoose=require("mongoose");

// const Regmodel=new mongoose.Schema(
//     {
//         email:{
//             type:String,
//             required:true,
//         },

//         name:{
//             type:String,
//             required:true,
//         },

//         password:{
//             type:String,
//             required:true,
//         },

//         phone:{
//             type:String,
//             required:true,
//         },

//         gender:{
//             type:String,
//             required:true,
//         },
//     },
//     {timestamps:true}
// );

// const Customerreg=mongoose.model("custmerregdetails",Regmodel);
// module.exports=Customerreg;