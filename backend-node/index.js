const app = require("./app");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8000


mongoose.connect("mongodb+srv://todolist:todolist@cluster0.7fz99q2.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("db connected")
})
 app.listen(PORT,()=>{console.log("server connected")})