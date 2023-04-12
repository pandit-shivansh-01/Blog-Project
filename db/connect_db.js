const mongoose = require('mongoose')

const url = "mongodb+srv://shivanshpandey506:123456789shivansh@cluster0.lexxz9t.mongodb.net/?retryWrites=true&w=majority"
const connectDB=()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log('connection sucessful')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB