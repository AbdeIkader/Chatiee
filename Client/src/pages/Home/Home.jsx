import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MessagesContainer from '../../components/Message/MessagesContainer';

export default function Home() {
  return (
    <div className='flex w-full h-full overflow-hidden bg-gray-100'>
      <Sidebar />
      <MessagesContainer />
    </div>
  );
}
