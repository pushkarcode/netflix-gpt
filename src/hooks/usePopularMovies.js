import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const raw = await data.json();
    dispatch(addPopularMovie(raw.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []); 
};


export default usePopularMovies;
