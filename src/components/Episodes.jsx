import React from 'react'

const Episodes = ({episodes}) => {
  return (
    <div className='episode-container w-[100%] flex  mt-10 ps-2'>
     <h2 className='text-2xl text-red-500'>{episodes ? `Total: ${episodes} episodes` : `Invalid Data`}</h2>
    </div>
  )
}

export default Episodes
