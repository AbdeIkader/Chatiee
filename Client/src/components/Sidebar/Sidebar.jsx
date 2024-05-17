import React from 'react';
import SearchInput from './SearchInput';
import LogoutButton from './LogoutButton';
import Conversations from './Conversations';

export default function Sidebar() {
  return (
    <div className='flex flex-col h-full p-2 w-1/3 border-r border-slate-200'>
      <SearchInput />
      <div className="flex-grow overflow-y-auto">
        <Conversations />
      </div>
      <div className="pt-4">
        <LogoutButton />
      </div>
    </div>
  );
}
