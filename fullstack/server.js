require ('dotenv').config()
const express = require ('express')
const mongoose=require('mongoose')

const app=express() //create an express app
const port =process.env.PORT || 3000
//const database=process.env.MONGODBLINK
const database="mongodb+srv://IreneBest:IreneCQ10@cluster0.yfc8xjn.mongodb.net/"

mongoose.connect(database).then(()=>{
    app.listen(port,()=>{
            console.log(`server is running on ${port}`)
    })
}).catch(err=>console.log(err))
