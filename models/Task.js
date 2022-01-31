const mongoose = require('mongoose')

 const TaskSchema = new mongoose.Schema({
     name:{
         type: String,
         required: [true, "cannot be empty"]
     }, 
     completed:{
         type:Boolean,
         default: false
     }
 })

 module.exports = mongoose.model('Task',TaskSchema )