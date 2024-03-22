import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secandraycontainer = () => {
  const movies = useSelector(store => store.movies)

  return movies && (
   <div className='-mt-52   relative z-20'>
   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
   <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
   <MovieList title={"Popular"} movies={movies.popularMovies}/>
   <MovieList title={"Top Rated"} movies={movies.toprated}/>

   </div>
  )
}

export default Secandraycontainer