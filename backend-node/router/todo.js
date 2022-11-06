const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../middleware/auth")
const todomodel = require("../models/todo")



router.post('/addtodo',auth, async (req,res) =>{
    const {activity, status , pending ,action} = req.body

    try {
        const data = await todomodel.create({
            activity, status , pending ,action
        })
        data.save()
        res.json({
            message:"data added succesfully",
            data
        })
    } catch (error) {
        
       res.send({
        message:error.message
       })

    }


})

router.get('/todo', auth , async(req,res)=>{
    try {
        const records = await todomodel.find(req.body);
        res.json({
            status:success,
            records
        })
    } catch (error) {
        res.json({
            status:failed,
            message:error.message
        })
    }
})

module.exports = router