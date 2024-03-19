import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;

  const mainMovie = movie[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full overflow-x-hidden ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />

    </div>
  );
};

export default Maincontainer;
