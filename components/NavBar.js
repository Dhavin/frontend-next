import React from 'react'
import Link from "next/link";

const NavBar = () => { 
  
  return (
    <div className='bg-cover'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <Link href="/">
              <h2><span className='text-[#fcbe44] text-2xl font-bold'>TakeItEasy</span> <span className='text-[#d62727] text-2xl '>Events</span></h2> 
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar