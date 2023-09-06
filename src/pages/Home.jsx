import React from 'react'
import HeroSlide from '../components/HeroSlide'
import MovieList from '../components/MovieList'

const Home = () => {
  return (
    <section className='home-wrapper bg-black' id='home-section'>
      <HeroSlide/>
      <MovieList/>
    </section>
  )
}

export default Home
