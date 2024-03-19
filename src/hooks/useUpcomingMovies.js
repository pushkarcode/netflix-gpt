import { useDispatch } from "react-redux";
import {  addPopularMovie, addUpcomingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const raw = await data.json();
    // console.log(raw.results);
    dispatch(addUpcomingMovie(raw.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []); 
};


export default useUpcomingMovies;
