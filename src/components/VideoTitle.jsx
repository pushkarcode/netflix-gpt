import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full px-12 lg:pt-12 flex flex-col lg:gap-y-4 gap-y-1 absolute">
      <div className="lg:w-[30%] w-[40vw] lg:mt-40 mt-16 flex flex-col lg:gap-y-5 backdrop-blur-sm gap-y-4">
        <h1 className="font-medium lg:text-5xl text-xl leading-5 text-zinc-200 tracking-tight">
          {title}
        </h1>
        <p className="font-medium lg:text-lg text-zinc-200 tracking-wide lg:leading-5 leading-[3.2vw]">
          {overview.slice(0,100)}...
        </p>
      </div>
      <div className="flex items-center gap-x-3 mt-1 backdrop-blur-sm w-[30%]">
        <button className="lg:px-10 px-3 py-1 lg:py-[1vw] rounded-lg bg-zinc-200 text-slate-900 font-medium  lg:text-xl flex items-center gap-x-2 hover:bg-opacity-80 transition-all ease-linear">
          Play
          <span className="text-sm">
            <FaPlay />
          </span>
        </button>
        <button className="lg:px-4 lg:py-[1vw] px-8 rounded-lg bg-zinc-400 text-slate-700 font-medium lg:text-xl leading-4 flex items-center gap-x-1 hover:bg-opacity-80 transition-all ease-linear">
          More Info
          <span className="pt-1">
            <IoMdInformationCircleOutline />
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
