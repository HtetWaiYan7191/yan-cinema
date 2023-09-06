import React from 'react'
import '../styles/HeroSlide.css'

const HeroSlide = () => {
  return (
    <section className='hero-slide-section'>
        <div className='hero-slide-container relative'>
           <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='w-[100%] h-[90vh] object-cover' alt="" />
        </div>
        <div className="hero-slide-info absolute mt-2">
            <h2 className='text-6xl mt-5 font-semibold'>Star Wars</h2>
            <p className='text-sm mt-8 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur modi fugiat distinctio est totam consectetur natus debitis neque unde quo optio, maxime quas at et ex aut voluptates quidem.</p>
            <div className="button-container flex mt-6">
                <button className='base-button'>Watch Now</button>
                <button className='base-button'>Details</button>
            </div>
        </div>
    </section>
  )
}

export default HeroSlide
