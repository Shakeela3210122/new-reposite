import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='bg-gray-100 z-50 sticky top-0'>
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={require("../../../public/new picture.jpg")} 
       alt="My portfolio"
       width={100}  
       height={100}
       className='w-[60px]'/>
        <span className="ml-3 text-xl">Port Folio</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-amber-800 max-w-screen-sm ml-auto">
        <Link href={"/"} className="mr-5 hover:text-blue-600 max-h-screen ml-auto">Home</Link>
        <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
        {/* <Link href={"#"} className="mr-5 hover:text-blue-600">Skills</Link> */}
        <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contact</Link>
      </nav>
       <a href="">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
       Download Cv
       <FaCloudDownloadAlt className='text-xl ml-2'/>
      </button>
      </a>
    </div>
  </header>
  
  </div>

  )
}


