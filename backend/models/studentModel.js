const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Student',studentSchema)