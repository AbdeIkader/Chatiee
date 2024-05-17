import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';


export default function MessagesContainer() {
    const noChatSelected = true;
  return <>
  
    {noChatSelected ? <NoChatSelected/> : (
         <div className='flex flex-col h-full w-full'>

         {/* Header */}
         <div className='border-b border-gray px-4 py-2 shadow-sm flex items-center'>
           <div className="avatar">
             <div className="w-12 rounded-full">
               <img src="https://avatars.githubusercontent.com/u/119017520?v=4" />
             </div>
           </div>
           <div className='ms-3 text-sm font-semibold'>Abdelrahman Abdelkader</div>
         </div>
   
         <Messages />
         <MessageInput />
       </div>
    )}
  </>;
}



