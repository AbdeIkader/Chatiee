import {mongoose,model, Schema} from 'mongoose'

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    profilePicture:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

export const userModel = model("User",userSchema)