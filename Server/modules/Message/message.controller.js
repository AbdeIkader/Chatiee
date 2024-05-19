import { catchAsyncError } from "./../../utils/catchAsyncError.js";
import conversationModel from "../../DB/models/conversation.model.js";
import messageModel from "./../../DB/models/message.model.js";

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
  res.status(201).json({ success: true, newMessage });
});

const getMessage = catchAsyncError(async (req, res) => {
  const senderId = req.user._id;
  const { id: userToChatId } = req.params;

  const conversation = await conversationModel
    .findOne({
      participants: { $all: [senderId, userToChatId] },
    })
    .populate('messages');

  if (!conversation) {
    return res.status(404).json([]);
  }

  res.status(200).json(conversation.messages);
});

export { sendMessage, getMessage };
//Added Enhancement