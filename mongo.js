var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
const custlogin = require("./loginmodel");
const Custreg = require('./Regmodel');
const app = express();


app.use(express.json());
app.use(cors())
mongoose.connect("mongodb://0.0.0.0:27017/myrestaurant")
    .then(() => {
        console.log("mongodb connected");
    })

    .catch(() => {
        console.log("failed")
    })

// app.get("/", cors(), (req, res) => {

// });



app.post("/", async (req, res) => {
    console.log(req)
    const { email, password } = req.body

    try {
        const check = await custlogin.find({ email: email,password:password })
        console.log(check)

        if (check.length>0) {
            res.json("exist")
        }
        else {
            res.json("not exist")
        }

    }
    catch (e) {
        res.json("not exist")

    }
})



app.post("/register", async (req, res) => {
    console.log(req)
    const { email,
        name,
        password,
        phone,
        gender } = req.body

    const data = {
        email: email,
        name: name,
        password: password,
        phone: phone,
        gender: gender
    }

    try {
        const check = await Custreg.find({ email: email })
        console.log(check)
        if (check.length>0) {
            res.json("exist")
        }
        else {
            res.json("not exist")
            await Custreg.insert([data])
        }

    }
    catch (e) {
        res.json("not exist")

    }
})




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host)
    console.log("server is running on http://localhost:3000", host, port);

});
