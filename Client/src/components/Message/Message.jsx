import React from 'react'

export default function Message() {
  return <>
    <div className="chat chat-end">
        <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img src="https://avatars.githubusercontent.com/u/119017520?v=4" />
                </div>
        </div>
        <div className={`chat-bubble text-white bg-gray-200 text-black`}> بقولك اغال انا مسافر دبي بكرة و مراتي جاية معايا عشان حنقابل نجيب ساويرس جاية منك تيجي انت والمدام </div>
        <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center`}>12:15 AM</div>

    </div>
  </>
}