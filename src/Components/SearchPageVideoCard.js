import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchPageVideoCard = ({info}) => {
    console.log(info);
    const {channelTitle,description,publishTime,thumbnails,title} = info?.snippet;
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/watch?v="+info?.id?.videoId)
    }
  return (
    <div className='flex pl-20 my-4'>
        <div className=''>
            <img src={thumbnails.high.url} alt="video" className='min-w-[550px] max-w-[551px] max-h-[300px] aspect-video rounded-xl hover:scale-105 cursor-pointer' onClick={handleClick} />
        </div>
        <div className='flex flex-col ml-8 mr-20'>
            <h3 className='font-semibold text-xl py-4'>{title}</h3>
           {channelTitle && <p className='font-bold py-4'>{channelTitle}</p>}
            <p className=''>{description}</p>
        </div>
    </div>
  )
}

export default SearchPageVideoCard