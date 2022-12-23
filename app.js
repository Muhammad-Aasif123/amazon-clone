require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const port =  5007;
const cookieParser = require("cookie-parser");
const DefaultData = require("./defaultdata");
require("./db/conn");
const router = require("./routes/router");
const Products = require("./models/productsSchema");
const jwt = require("jsonwebtoken");


// middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser(""));

app.use(router);
// app.get("/",(req,res)=>{
//     res.send("your server is running");
// });


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();