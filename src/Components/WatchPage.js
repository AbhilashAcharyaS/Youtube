import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SearchPageVideoCard from './SearchPageVideoCard';
import { YOUTUBE_POPULAR_VIDEO_URL } from '../Utils/constants';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"));
    const VideoKey= searchParams.get('v');
    
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    const [videos, setVideos]= useState([]);
      const getPopularVideos = async()=>{    
        const data= await fetch(YOUTUBE_POPULAR_VIDEO_URL);
        const json= await data.json();
        console.log(json.items);
        setVideos(json.items);
      }
      useEffect(()=>{
        getPopularVideos()
      },[])


  return (
    <div className='pl-12 flex flex-col w-full'>
      <div className='flex w-full'>
        <div>
        <iframe width="800" height="420" className='rounded-xl mr-4' src={"https://www.youtube.com/embed/"+ VideoKey} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full mr-4'>
          <LiveChat/>
        </div>
      </div>
      <div className='flex'>
        <div className='w-[800px]'><CommentsContainer/></div>
        <div className='mx-4'>
          <h3 className='text-center font-bold text-lg my-4'>Recommended Videos</h3>
          <div className='max-w-[380px]'>
            {videos.map((vid)=>(<SearchPageVideoCard info={vid} key={vid.id} watchPage={true} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage;