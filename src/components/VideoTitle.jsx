import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full px-12 pt-12 flex flex-col gap-y-4 absolute">
      <div className="w-[30%] mt-40 flex flex-col gap-y-5 backdrop-blur-sm">
        <h1 className="font-medium text-5xl text-zinc-800 tracking-tight">
          {title}
        </h1>
        <p className="font-medium text-lg text-zinc-800 tracking-wide leading-5">
          {overview}
        </p>
      </div>
      <div className="flex items-center gap-x-3 backdrop-blur-sm w-[30%]">
        <button className="px-10 py-[1vw] rounded-lg bg-zinc-200 text-slate-900 font-medium  text-xl flex items-center gap-x-2 hover:bg-opacity-80 transition-all ease-linear">
          Play
          <span>
            <FaPlay />
          </span>
        </button>
        <button className="px-4 py-[1vw] rounded-lg bg-zinc-400 text-slate-700 font-medium  text-xl flex items-center gap-x-1 hover:bg-opacity-80 transition-all ease-linear">
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
