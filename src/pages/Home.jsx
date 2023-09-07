import React, {useEffect} from 'react'
import HeroSlide from '../components/HeroSlide'
import MovieList from '../components/MovieList'
import {useSelector, useDispatch} from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'

const Home = () => {
  const movies = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(movies.length === 0 ) {
      dispatch(fetchMovies())
    }
  }, [movies])

  return (
    <section className='home-wrapper bg-black' id='home-section'>
      <HeroSlide/>
      <MovieList movies = {movies}/>
    </section>
  )
}

export default Home
