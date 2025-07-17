import Navbar from '@/components/navbar'
import React from 'react'

export default function page() {
  return (
    <div className='relative h-screen w-screen overflow-y-auto overflow-x-hidden'>
      <div className='relative px-20'>
        {/* navbar */}
       <Navbar/>

        {/* content */}
        <div className="relative text-7Txl w-xl font-bold text-red-500 mt-20">this is a fucking example</div>
      </div>
    </div>
  )
} 
