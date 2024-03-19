import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secandraycontainer from "./Secandraycontainer";

const Browse = () => {
  // ! fetch data from tmdb api and update store
  useNowPlayingMovies();
  
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Maincontainer />
      <Secandraycontainer />
    </div>
  );
};

export default Browse;
