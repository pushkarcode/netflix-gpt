import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return  (
    <div className="py-3">
      <h1 className="text-[2.6vw] p-3 font-bold tracking-tight leading-none text-zinc-400">{title}🔥</h1>
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
