import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loader from "./Loader";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return movieResults && (
    <div className="w-full lg:h-[70vh] h-[50vh] absolute top-[30%] left-0 bg-zinc-800 bg-opacity-80 p-2 px-6 mt-12">
      <MovieList title={movieName} movies={movieResults.results} />
    </div>
  ) ;
};

export default GptMovieSuggestions;
