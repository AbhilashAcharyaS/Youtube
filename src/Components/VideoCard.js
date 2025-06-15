import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({info}) => {
    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails}= snippet;

  return (
    <div className='p-2 sm:ml-10 w-[380px] rounded-xl shadow-sm'>
        <Link to={'/watch?v='+info.id} ><img className='rounded-xl w-full hover:scale-105 hover:cursor-pointer' src={info?.snippet?.thumbnails.medium.url} alt="thumbnail"/>
        </Link>
        <div className='px-4'>
         <p className='font-semibold pt-2'>{info?.snippet?.title} </p>
         <p className='text-sm py-1'>{info?.snippet?.channelTitle}</p>
        </div>
    </div>
  )
}

export default VideoCard