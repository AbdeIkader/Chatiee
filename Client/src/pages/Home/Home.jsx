import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Home() {
  return <>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-100'>
        <Sidebar/>
		</div>
  </>
}
