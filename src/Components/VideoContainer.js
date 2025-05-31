import React, { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_VIDEO_URL } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  const [pageToken,setPageToken]=useState(null);

  const getPopularVideos = async()=>{    
    const data= await fetch(YOUTUBE_POPULAR_VIDEO_URL);
    const json= await data.json();
    // console.log(json);
    setVideos(json.items);
    await setPageToken(json?.nextPageToken);
  }
  useEffect(()=>{
    getPopularVideos()
  },[])

  const handleInfiniteScroll=async()=>{

    if(window.innerHeight + document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight) {
      // console.log("API call with "+ pageToken);
      const data= await fetch(YOUTUBE_POPULAR_VIDEO_URL+"&pageToken="+pageToken);
      const json= await data.json();
      // console.log(json);
      let uniqueVideos= new Set([...videos, ...json.items])
      // setVideos((prev)=>[...prev,...json.items])
      setVideos(Array.from(uniqueVideos));
      setPageToken(json?.nextPageToken)
    }
    // console.log(document.documentElement.scrollHeight);
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollTop)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleInfiniteScroll);
    return ()=>window.removeEventListener("scroll",handleInfiniteScroll)
  },[pageToken])

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