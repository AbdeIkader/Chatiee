import React from 'react'
import {BiLogOut} from 'react-icons/bi';
export default function LogoutButton() {
  return <>
    <div className='bg-red-100 py-2 rounded-t-xl'>
        <BiLogOut className='ms-2 w-5 h-5 text-red-600 cursor-pointer' />
    </div>
  </>
}
