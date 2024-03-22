import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import noimage from "../assets/noimage.png";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 p-3">
      {posterPath ? (
        <img
          className="w-full h-[18vw]  object-cover rounded-sm"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Car"
        />
      ) : (
        <img
          className="w-full h-[18vw] object-cover rounded-sm"
          src={noimage}
          alt="Movie Car"
        />
      )}
    </div>
  );
};

export default MovieCard;
