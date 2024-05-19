import { useState } from "react";
import { BsSend } from 'react-icons/bs';
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput() {

  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};


  return (
    <form className='px-12 py-3 border-t-2' onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input 
          type="text" 
          className='border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-200 border-gray-400 ' 
          placeholder='Send a message'
          value={message}
					onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit" 
          className='absolute inset-y-0 right-0 flex items-center pr-3 text-black'
        >
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
}
