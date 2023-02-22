const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const { stringify } = require('querystring')

//define schema
const CategorySchema= new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    image:    
    {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
    
},{Timestamp:true})
// create collection
const CategoryModel = mongoose.model('Category',CategorySchema)
module.exports=CategoryModel
