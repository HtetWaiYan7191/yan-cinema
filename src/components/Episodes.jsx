import React from 'react'

const Episodes = ({episodes}) => {
  return (
    <div className='episode-container w-[100%] flex flex-wrap mx-auto w-[80%] mt-10 h-[100vh]'>
     <h2 className='text-2xl text-red-500'>{episodes ? `Total: ${episodes} episodes` : `Invalid Data`}</h2>
    </div>
  )
}

export default Episodes
