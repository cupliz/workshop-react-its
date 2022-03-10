import React from 'react'
import { HiHome } from 'react-icons/hi'
import { BiBus } from 'react-icons/bi'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Template(props) {
  return (
    <div>

      <div className="flex flex-col h-screen justify-between">
        <div className='w-full text-center text-white bg-blue-500 p-3 text-xl indent-3'>Form API</div>
        {props.children}
        <footer className="bg-blue-500 grid grid-cols-3 ">
          <Link to="/" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
            <HiHome className='text-xl' />
          </Link>
          <Link to="/bus" className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
            <BiBus className='text-xl' />
          </Link>
          <div className='cursor-pointer text-white hover:bg-gray-500 p-3 mx-auto'>
            <IoLogOutOutline className='text-xl' />
          </div>
        </footer>
      </div>
    </div>
  )
}
