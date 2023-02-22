const mongoose =require('mongoose')
const { stringify } = require('qs')

// define schema 
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})


// create collection             
const ContactModel= mongoose.model('contact',contactSchema)
//                                ^ collection name  


module.exports=ContactModel
