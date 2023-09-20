import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import '../styles/Loading.css';

const Loading = () => {
  return (
    <section className='loading-section h-[100vh] bg-black flex justify-center items-center'>
        <div className='loading-container'>
            <AiOutlineLoading3Quarters className=' loading-icon text-red-500'/>
        </div>
    </section>
  )
}

export default Loading
