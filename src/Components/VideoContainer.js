import React, { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_VIDEO_URL } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  const getPopularVideos = async()=>{    
    const data= await fetch(YOUTUBE_POPULAR_VIDEO_URL);
    const json= await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  useEffect(()=>{
    getPopularVideos()
  },[])
  return (
    <div>
      <div className='flex flex-wrap'>
        {videos.map((video)=>
        <Link key={video.id} to={'/watch?v='+video.id}> <VideoCard  info={video}/></Link> )}
        
      </div>
    </div>
  )
}

export default VideoContainer