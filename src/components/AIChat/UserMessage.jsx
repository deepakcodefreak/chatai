import React from 'react'

function UserMessage({message, timestamp}) {
  return (
    <div className='flex float-end rounded-xl p-2 px-4 rounded-tr-none bg-blue-500 text-white'>
      <div className='flex flex-col gap-1'>
        <div>
          {message}
        </div>
        <div className='flex justify-end text-[10px]'>
          {new Date(timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default UserMessage