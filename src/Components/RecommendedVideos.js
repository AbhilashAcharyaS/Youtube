import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideos = ({info}) => {
    const {channelTitle,description,publishTime,thumbnails,title} = info?.snippet;

  return (
    <div>
      <Link to={"/watch?v=" + info.id}>
        <div className="flex my-4 w-full">
          <div className="w-1/2">
            <img
              src={thumbnails.high.url}
              alt="video"
              className=" aspect-video rounded-xl hover:scale-105 cursor-pointer"
            />
          </div>
          <div className="flex flex-col w-1/2 px-2">
            <h3 className="font-semibold py-2 text-xs">{title}</h3>
            {channelTitle && (
              <p className="font-bold py-1 text-xs">{channelTitle}</p>
            )}
              {/* <p className="h-[100px] overflow-hidden text-xs">{description}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedVideos;
