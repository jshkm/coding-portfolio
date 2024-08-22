import React from 'react'

function Test() {
  return (
    <div className='relative flex h-screen w-screen'>
        <div className='absolute w-3/4 h-full bg-blue-500 z-10'>
        </div>
        <div className='w-full h-full bg-red-500 pointer-events-none'>
            <button className='bg-green-500 w-full h-20'>

            </button>
        </div>
    </div>
  )
}

export default Test