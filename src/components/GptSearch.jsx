import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import background from "../assets/background.jpg";


const GptSearch = () => {
  return (
    <div>
     <div className="absolute">
        <img
          className="object-cover w-screen h-screen "
          src={background}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
