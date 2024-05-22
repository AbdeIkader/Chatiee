import { catchAsyncError } from "./../../utils/catchAsyncError.js";
import conversationModel from "../../DB/models/conversation.model.js";
import messageModel from "./../../DB/models/message.model.js";
import { getReceiverSocketId, io } from "../../../Socket/socket.js";

const sendMessage = catchAsyncError(async (req, res) => {
  const senderId = req.user._id;
  const { id: receiverId } = req.params;
  const { message } = req.body;

  let conversation = await conversationModel.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = new conversationModel({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new messageModel({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }

  await Promise.all([conversation.save(), newMessage.save()]);

  // Populate sender details
  const populatedMessage = await messageModel.findById(newMessage._id).populate('senderId', 'fullName userName profilePic');

  const receiverSocketId = getReceiverSocketId(receiverId)
  if(receiverSocketId){
    io.to(receiverSocketId).emit("newMessage", populatedMessage)
  }
  res.status(201).json(populatedMessage);
});

const getMessage = catchAsyncError(async (req, res) => {
  const senderId = req.user._id;
  const { id: userToChatId } = req.params;

  // Find conversation with participants including senderId and userToChatId
  const conversation = await conversationModel.findOne({
    participants: { $all: [senderId, userToChatId] }
  }).populate({
    path: 'messages',
    populate: {
      path: 'senderId',
      select: 'fullName userName profilePic'
    }
  });

  if (!conversation) {
    return res.status(404).json([]);
  }

  const messages = conversation.messages;

  res.status(200).json(messages);
});



export { sendMessage, getMessage };
//Added Enhancement