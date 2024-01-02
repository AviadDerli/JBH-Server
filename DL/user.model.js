const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
    },
    lastName : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required:true,
        unique : true,
    },
    rule : {
        type:String,
        enum: ["admin","user"],
        default : "user"
    },
    license:[{
        title : {
            type:String,
            required : true
        },
        issueDate : {
            type:Date,
            required : true
        },
    }],
    createdDate : {
        type:Date,
        default: Date.now
    },
    isActive:{
        type:Boolean,
        default:true
    }

})
const userModel = mongoose.model('user',userSchema)
module.exports = userModel;