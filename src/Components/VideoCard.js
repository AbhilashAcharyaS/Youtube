import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails}= snippet;

  return (
    <div className='p-2 m-0 w-[360px] rounded-xl shadow-sm'>
         <img className='rounded-xl w-full hover:scale-105 hover:cursor-pointer' src={thumbnails.medium.url} alt="thumbnil"/>
        <div className='px-4'>
         <p className='font-semibold pt-2'>{title} </p>
         <p className='text-sm py-1'>{channelTitle}</p>
        </div>
    </div>
  )
}

export default VideoCard