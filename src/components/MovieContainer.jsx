import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({categories, filterObject}) => {
  return (
  
    Object.keys(filterObject).map((key, id) => (
      <MovieCard key={id} movies={filterObject[key]} category={key} />
    ))
    
  
  )
}

export default MovieContainer
