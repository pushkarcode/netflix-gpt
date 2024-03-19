import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // ! fetch trailer video and update the state
    const getmovietrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const raw = await data.json();
    //   console.log(raw);
  
      const filterdata = raw.results.filter(
        (val) => val.name === "Official Trailer"
      );
      const trailer = filterdata.length ? filterdata[0] : raw.results[0];
    //   console.log(trailer);
      dispatch(addTrailerVideo(trailer.key));
    };
    useEffect(() => {
      getmovietrailer();
    }, []);
}

export default useMovieTrailer;