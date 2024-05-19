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
    await conversationModel.create({
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
  res.status(201).json({ sucess: true, newMessage });
});

const getMessage = catchAsyncError(async (req, res) => {
  const senderId = req.user._id;
  const { id: userToChatId } = req.params;
  console.log(userToChatId);
  console.log(senderId);
  const conversation = await conversationModel
    .findOne({
      participants: { $all: [senderId, userToChatId] },
    })
    .populate("messages");
  console.log(conversation);
  if (!conversation) {
    return res.status(404).json([]);
  }
  const messages = conversation.messages;
  res.status(200).json(messages);
});
export { sendMessage, getMessage };
