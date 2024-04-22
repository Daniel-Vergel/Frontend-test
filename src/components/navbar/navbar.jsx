import React from 'react'
import { FaGripLinesVertical } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className=' bg-black fixed w-full '>

      <div className='flex items-center '>

        <button>
          <img 
          src="https://cs3.com.co/uploads/2/2019-04/logo_cs3_2.png" 
          alt="logo cs3"
          className=" ml-3 w-12 h-12 object-contain"
          />
        </button>
        <FaGripLinesVertical className='ml-3 color text-cyan-900 ' />
        <h1 className='text-cyan-900  font-mono ml-3 '>CLIENTE</h1>

      </div>

    </nav>
  )
}
