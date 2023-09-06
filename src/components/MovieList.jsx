import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const MovieList = () => {
    
  return (
    <div className="movielist-container mt-10 h-[50vh] w-[80%] mx-auto  ">
        <h2 className='text-4xl mb-10 '>Movie List</h2>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>    
    </Swiper>
    </div>

  )
}

export default MovieList
