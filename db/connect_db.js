const mongoose = require('mongoose')


const connectDB=()=>{
    return mongoose.connect('mongodb://localhost:27017/blogwebsite')
    .then(()=>{
        console.log('connection sucessful')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB