import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchPageVideoCard = ({ info }) => {
  // console.log(info);
  const { channelTitle, description, publishTime, thumbnails, title } =
    info?.snippet;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/watch?v=" + info?.id?.videoId);
    window.scrollTo({top:0, behavior:"smooth"})
  };

  return (
    <div className="flex my-4 w-full pl-20" onClick={() => handleClick()}>
      <div className="w-1/2">
        <img
          src={thumbnails.high.url}
          alt="video"
          className="w-[550px] aspect-video rounded-3xl hover:scale-105 cursor-pointer"
        />
      </div>
      <div className="flex flex-col w-1/2 pr-12">
        <h3 className="font-semibold py-2 text-xl">{title}</h3>       
        <p className="font-bold py-2 text-md text-slate-600">{channelTitle}</p>
        <p className="h-[100px] overflow-hidden text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SearchPageVideoCard;
