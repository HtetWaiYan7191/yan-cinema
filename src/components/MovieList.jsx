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
    <div className="movielist-container mt-10 h-[50vh] w-[80%] mx-auto absolute top-[65%] left-[10%] bg-transparent  ">
        <h2 className='text-white text-3xl font-semibold mb-6'>Movie List</h2>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={7}
      navigation
      scrollbar={{ draggable: true }}

      // onSlideChange={}
      // onSwiper={}
    >
      {
        movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <figure className=" overflow-hidden w-[100%]">
              <img src={movie.image.medium} alt="" className="rounded-lg overflow-hidden w-[100%]  object-cover" />
            </figure>
          </SwiperSlide>
        ))
      }
        
    </Swiper>
    </div>

  )
}

export default MovieList
