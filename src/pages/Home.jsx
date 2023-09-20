import React, {useEffect} from 'react'
import HeroSlide from '../components/HeroSlide'
import MovieList from '../components/MovieList'
import {useSelector, useDispatch} from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'
import { fetchTrending } from '../redux/trendingSlice'
import MovieContainer from '../components/MovieContainer'
import Loading from '../components/Loading'

const Home = () => {
  const movies = useSelector((state) => state.movie.value);
  const trending = useSelector((state) => state.trending.value);
  const categories = useSelector((state) => state.movie.categories);
  const filterObject = categories.reduce((acc, category) => {
    // Use filter to get an array of movies that belong to the current category
    const moviesInCategory = movies.filter((movie) =>
      movie.category.includes(category)
    );
  
    // If there are movies for the category, add them to the filterObject
    if (moviesInCategory.length > 0) {
      acc[category] = moviesInCategory;
    }
  
    return acc;
  }, {});
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(movies.length === 0 && trending.length === 0 ) {
      dispatch(fetchMovies())
      dispatch(fetchTrending())
    }
  }, [movies, trending])

  return (
    <section className='home-wrapper bg-black' id='home-section'>
      {movies.length === 0 ? (
        <Loading/>
      ) : (
        <>
        <HeroSlide/>
        <MovieList movies = {movies}/>
        <MovieContainer categories={categories} filterObject={filterObject}/>
        </>
        
      )}
      
    </section>
  )
}

export default Home
