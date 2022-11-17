const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("Hello express server");
});

app.post("/login", (req, res)=>{
    let {email, password} = req.body;
});

app.listen(3000);