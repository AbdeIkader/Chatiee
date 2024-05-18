import {Schema ,model} from 'mongoose'

const conversationSchema = new Schema({
    participants:[
        {
            type:Schema.ObjectId,
            ref:"User"
        }
    ],
    messages:[
        {
            type:Schema.ObjectId,
            ref:"Message",
            default:[]
        }
    ]

},{timestamps:true})

const conversationModel = model("Conversation",conversationSchema)

export default conversationModel