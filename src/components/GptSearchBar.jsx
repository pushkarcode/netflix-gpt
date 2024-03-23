import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Error404 } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


  const searchMovieTMDB = async (movie) => {
    let hui  = searchText.current.value;
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${hui}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const raw = await data.json();
    let push = searchText.current.value;

    dispatch(addGptMovieResults({ movieName: push, movieResults: raw }));
  };

  
  return (
    <div className="absolute lg:top-[16%] top-[12%] left-[50%] -translate-x-[50%] -translate-y-[50%]  lg:w-[30vw]">
      <form
        className="lg:mt-8 mt-[30vw] mx-auto flex items-center gap-x-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 lg:w-[20vw] w-[70vw] lg:py-3 py-5 outline-none rounded-md text-zinc-500 font-sans"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={searchMovieTMDB}
          className="px-3 lg:py-[.7vw] py-4 rounded-md bg-fuchsia-400 lg:text-md text-xl font-bold text-zinc-800"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
