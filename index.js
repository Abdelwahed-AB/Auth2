const express = require("express");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const passport = require("passport");
const passport_jwt = require("");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("Hello express server");
});

app.post("/login", (req, res)=>{
    let {email, password} = req.body;

    //this check is done normally with a db
    if(email == "test@test.com"){
        if(password == "pass"){ // password comparison normally with bcrypt
            opts.expiresIn = 120; // expires in 2 mins
            const secret = "Secret"; // normally stored in an env variable
            const token = jwt.sign({email, password}, secret, opts);

            return res.status(200).json({
                message: "Auth passed",
                token,
            });
        }
    }

    res.statusCode(401).json({
        message: "Auth failed",
    });
});

app.listen(3000);