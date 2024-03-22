import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secandraycontainer from "./Secandraycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopratedMovie from "../hooks/useTopratedMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  // ! fetch data from tmdb api and update store
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovie();

  return  (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-300">
      <Header />
      {showGptSearch ? ( 
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <Secandraycontainer />
        </>
      )}
     
    </div>
  );
};

export default Browse;
