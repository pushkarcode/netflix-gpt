import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  let langKey = useSelector((store) => store.config.lang);

  return (
    <div className="flex absolute ml-[35vw] mt-12  w-[30vw]">
      <form className="mt-8 mx-auto flex items-center gap-x-4 ">
        <input
          className="px-4 w-[20vw] py-3 outline-none rounded-md text-zinc-500 font-sans"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="px-3 py-3 rounded-md bg-fuchsia-400 text-md font-bold text-zinc-800">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
