import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"));
    const VideoKey= searchParams.get('v');
    
    useEffect(()=>{
        dispatch(closeMenu())
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
      <div className='w-[800px]'>
        <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage;