import React from 'react'

export default function Conversation() {
    return <>
        <div className='flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-2 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/119017520?v=4" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-8 justify-between items-center'>
                    <p className='font-bold text-gray-800 text-sm'>Abdelrahman Abdelkader</p>
                    <p className='text-xs'>12:15 AM</p>
                </div>
                <div className='text-sm'>
                    اشطا اغال
                </div>
            </div>
        </div>

    </>
}
