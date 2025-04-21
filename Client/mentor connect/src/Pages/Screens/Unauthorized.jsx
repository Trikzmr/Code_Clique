import React from 'react'

const Unauthorized = () => {
  return (
    <div className='min-h-screen '>
        <div className="flex flex-col justify-center items-center h-screen bg-[#E8F3EB]">
            <h1 className='text-4xl font-bold'>Unauthorized Access</h1>
            <p className='text-lg mt-4'>You do not have permission to view this page.</p>
            <a href="/" className='mt-6 bg-blue-500 text-white px-4 py-2 rounded'>Go to Home</a>
        </div>
    </div>
  )
}

export default Unauthorized
