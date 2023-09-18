import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/MovieList.css';

const MovieCard = ({ category, movies }) => {
  return (
    <div className="movie-card w-[80%] h-[50vh] mx-auto">
      <h2 className="text-white text-3xl font-semibold mb-6">{category}</h2>
      <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={25}
       slidesPerView={7}
       navigation
       scrollbar={{ draggable: true }}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
          <figure className=" overflow-hidden w-[100%]">
            <img
              src={movie.image.medium}
              alt=""
              className="rounded-lg overflow-hidden w-[100%]  object-cover"
            />
          </figure>
          </Link>
        </SwiperSlide>
      ))}
         </Swiper>
    </div>
  );
};

export default MovieCard;
