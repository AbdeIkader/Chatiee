import { useEffect, useRef, useState } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../Sidebar/skeletons/MessageSkeleton.jsx";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages.js";

export default function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const lastMessageRef = useRef();

  useEffect(() => {
    if (scrollToBottom) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setScrollToBottom(false);
    }
  }, [scrollToBottom]);

  useEffect(() => {
    if (messages.length > 0) {
      setScrollToBottom(true);
    }
  }, [messages]);

//   console.log(messages);
  return (
    <div className='px-4 py-2 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
}
