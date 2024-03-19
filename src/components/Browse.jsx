import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secandraycontainer from "./Secandraycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopratedMovie from "../hooks/useTopratedMovie";

const Browse = () => {
  // ! fetch data from tmdb api and update store
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovie();
  
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-900">
      <Header />
      <Maincontainer />
      <Secandraycontainer />
    </div>
  );
};

export default Browse;
