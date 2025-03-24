import React from 'react'

const Callformeet = () => {

  return (
    <div className='px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 sm:px-6 sm:pt-6 border border-gray-200'>
        <div className='text-xl font-semibold text-gray-800'>Call for a meeting</div>
        <div className='text-lg text-gray-500 mt-2'>You have 2 meetings today</div>
        <div className='flex mt-4'>
          <div className='w-1/2'>
            <button className='bg-blue-500 h-16 text-white px-4 py-2 rounded-lg cursor-pointer'>Join Meeting</button>
          </div>
          <div className='w-1/2'>
            <button className='bg-blue-500 h-16 text-white px-4 py-2 rounded-lg cursor-pointer'>Schedule Meeting</button>
          </div>
      </div>
    </div>
  )
}

export default Callformeet;
