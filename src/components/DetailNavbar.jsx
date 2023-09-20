import React from 'react'
import {MdArrowBack} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const DetailNavbar = () => {    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
  return (
    <div className='detail-navbar bg-black p-10'>
        <ul>
            <button onClick={handleClick}><MdArrowBack className='text-3xl'/></button>
        </ul>
    </div>
  )
}

export default DetailNavbar
