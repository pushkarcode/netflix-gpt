import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return  (
    <div className="py-3">
      <h1 className="lg:text-[2.6vw] text-3xl lg:p-3 p-1 font-bold tracking-tight leading-none text-zinc-400 mb-8">{title}🔥</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  ) ;
};

export default MovieList;
