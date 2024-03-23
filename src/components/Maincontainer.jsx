import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;
   var n = Math.floor(Math.random()*20);
  const mainMovie = movie[n];


  const { original_title, overview, id } = mainMovie;

  return (
    movie && (
      <div className="relative w-full mt-20 lg:mt-0 lg:mb-0 mb-12 overflow-x-hidden">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    )
  );
};

export default Maincontainer;
