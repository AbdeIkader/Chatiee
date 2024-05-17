import React from 'react';
import { BsSend } from 'react-icons/bs';

export default function MessageInput() {
  return (
    <form className='px-12 py-3 border-t-2'>
      <div className="relative w-full">
        <input 
          type="text" 
          className='border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-200 border-gray-400 ' 
          placeholder='Send a message'
        />
        <button 
          type="submit" 
          className='absolute inset-y-0 right-0 flex items-center pr-3 text-black'
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
}
