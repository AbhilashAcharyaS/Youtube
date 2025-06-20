import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
// import SearchPageVideoCard from './SearchPageVideoCard';
import { YOUTUBE_POPULAR_VIDEO_URL } from '../Utils/constants';
import RecommendedVideos from './RecommendedVideos';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"));
    const VideoKey= searchParams.get('v');
    
    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
        dispatch(closeMenu())
    },[])

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
    <div className='pl-1 pr-1 sm:pr-0 sm:pl-12 flex flex-col w-full'>
      <div className='flex flex-col sm:flex-row w-full'>
        <div>
        <iframe height="420" className='rounded-xl mr-4 w-full sm:w-[800px] mb-2 sm:mb-0' src={"https://www.youtube.com/embed/"+ VideoKey} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full mr-4'>
          <LiveChat/>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[800px]'><CommentsContainer/></div>
        <div className='mx-4'>
          <h3 className='text-center font-bold text-lg my-4'>Recommended Videos</h3>
          <div className='max-w-[380px]'>
            {videos.map((vid)=>(<RecommendedVideos info={vid} key={vid.id} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage;