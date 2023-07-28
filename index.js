const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/students')
.then(()=>{console.log('db is connected')})
.catch((e)=>{console.log(e)})


const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const user = mongoose.model('user', userSchema);

app.get('/',(req, res)=>{
   
})

app.post('/signUp', async (req, res)=>{
    const {name, email, password} = req.body;
    const User = await user.findOne({email});
    if(User) {
        res.json({message:'Email Already exist'})
    }
    else {
        user.create({name, email, password})
        .then(()=>{res.json({message:'success'})})
        .catch((e)=>{console.log(e)})
    }
})

app.listen(port, ()=>{console.log(`server in running at port no ${port}`)})