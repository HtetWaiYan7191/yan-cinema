import React, {useEffect} from 'react'
import HeroSlide from '../components/HeroSlide'
import MovieList from '../components/MovieList'
import Trending from '../components/Trending'
import {useSelector, useDispatch} from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'
import { fetchTrending } from '../redux/trendingSlice'

const Home = () => {
  const movies = useSelector((state) => state.movie.value);
  const trending = useSelector((state) => state.trending.value);
  const categories = useSelector((state) => state.movie.categories);
  console.log(categories)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(movies.length === 0 && trending.length === 0 ) {
      dispatch(fetchMovies())
      dispatch(fetchTrending())
    }
  }, [movies, trending])

  return (
    <section className='home-wrapper bg-black' id='home-section'>
      <HeroSlide/>
      <MovieList movies = {movies}/>
      <Trending/>
    </section>
  )
}

export default Home
