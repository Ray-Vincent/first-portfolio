import React from 'react'

export default function Navbar() {
  return (
  <div className='relative py-4 flex items-center justify-between'>
          <div className='relative text-xl font-bold text-gray-100'>Piyush Portfolio</div>
          <div className='relative flex text-sm items-center gap-8 text-gray-400'>
            <div className='relative'>Ecosystem</div>
            <div className='relative'>Docs</div>
            <div className='relative'>Community</div>
            <div className='relative'>Blog</div>
          </div>
          <div className='relative w-8'>
            <div className='relative flex w-full py-1 justify-start'>
              <div className='relative h-[2px] rounded-full w-4 bg-gray-100'></div>
            </div>
            <div className='relative flex w-full py-5'>
              <div className='relative h-[2px] rounded-full w-full bg-gray-100'></div>
            </div>
            <div className='relative flex w-full py-1 justify-end'>
              <div className='relative h-[2px] rounded-full w-4 bg-gray-100'></div>
            </div>
          </div>
        </div>
    )
}
