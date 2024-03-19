import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const raw = await data.json();
    // console.log(raw.results);
    dispatch(addNowPlayingMovie(raw.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default useNowPlayingMovies;
