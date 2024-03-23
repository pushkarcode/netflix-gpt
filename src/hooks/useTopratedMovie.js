import { useDispatch, useSelector } from "react-redux";
import {
  addPopularMovie,
  addTopratedMovie,
  addUpcomingMovie,
} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useTopratedMovie = async () => {
  const dispatch = useDispatch();
  const toprated = useSelector((store) => store.movies.toprated);

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const raw = await data.json();
    dispatch(addTopratedMovie(raw.results));
  };
  useEffect(() => {
    !toprated && getTopratedMovies();
  }, []);
};

export default useTopratedMovie;
