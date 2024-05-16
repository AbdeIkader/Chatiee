import React from 'react'
import { FiSearch } from 'react-icons/fi';


export default function SearchInput() {
  return <>
<div className="h-[40px] flex items-center bg-white border rounded-md p-2 shadow-sm m-2">
      <FiSearch className="text-gray-500 ml-1" size={20}/>
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 w-full outline-none"
      />
    </div>
  </>
}
