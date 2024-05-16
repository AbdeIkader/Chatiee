import React from 'react'
import SearchInput from './SearchInput'
import Conversations from '../Conversations'
import LogoutButton from './LogoutButton'

export default function Sidebar() {
  return <>
  <div className='flex flex-col p-4 border-r border-slate-500'>
  <SearchInput/>
    <Conversations/>
    <LogoutButton/>
  </div>

  </>
}
