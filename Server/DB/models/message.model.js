import {Schema ,model} from 'mongoose'

const messageSchema = new Schema({
    senderId:{
        type:Schema.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:Schema.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const messageModel = model("Message",messageSchema)

export default messageModel