import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/MovieList.css';
const MovieList = ({movies}) => {
    
  return (
    <div className="movielist-container mt-10 h-[50vh] w-[80%] mx-auto  ">
        <h2 className='text-4xl mb-10 '>Movie List</h2>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={6}
      navigation
      scrollbar={{ draggable: true }}

      // onSlideChange={}
      // onSwiper={}
    >
      {
        movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={movie.image.medium} alt="" className="rounded-lg overflow-hidden w-[100%] object-cover" />
          </SwiperSlide>
        ))
      }
        
    </Swiper>
    </div>

  )
}

export default MovieList
