const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req, res)=>{
    res.send({message:"successs"})
})

app.listen(port, ()=>{console.log(`server in running at port no ${port}`)})