import React from "react";
import { GrChatOption } from "react-icons/gr";
const { authUser } = useAuthContext();

export default function NoChatSelected() {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center justify-center gap-6'>
                <div className="flex items-center justify-center gap-2 text-5xl text-blue-500">
                    <div>Chatiee </div>
                    <GrChatOption />
                </div>

                <p className="text-md">Welcome 👋 <span className="font-bold">{authUser.fullName}</span></p>
                <p className="text-base">Select a chat to start messaging</p>

            </div>
        </div>
    );
}
