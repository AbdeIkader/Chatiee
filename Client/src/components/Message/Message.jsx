import React from 'react'

export default function Message() {
  return <>
    <div className="chat chat-end">
        <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img src="https://avatars.githubusercontent.com/u/119017520?v=4" />
                </div>
        </div>
        <div className={`chat-bubble text-white bg-gray-400 text-black`}> اشطا اغال</div>
        <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center`}>12:15 AM</div>

    </div>
  </>
}
