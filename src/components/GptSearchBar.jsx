import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS, Error404 } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    let hui = searchText.current.value;
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${hui}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const raw = await data.json();
    let push = searchText.current.value;

    dispatch(addGptMovieResults({ movieName: push, movieResults: raw }));
  };

  return (
    <div className="absolute top-[15%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[30vw]">
      <form
        className="mt-8 mx-auto flex items-center gap-x-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 w-[20vw] py-3 outline-none rounded-md text-zinc-500 font-sans"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={searchMovieTMDB}
          className="px-3 py-3 rounded-md bg-fuchsia-400 text-md font-bold text-zinc-800"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
