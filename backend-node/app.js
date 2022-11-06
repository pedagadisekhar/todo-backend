const express = require("express");
const app = express();
const bodyParser=require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(express.json())

//const contactroute = require("./routes/contact.js");
const registerroute =require("./router/register.js")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use('/', contactroute);
app.use('/', registerroute);

module.exports = app