import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"));
    const VideoKey= searchParams.get('v');
    
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='pl-12 flex flex-col'>
      <div>
        <iframe width="800" height="420" className='rounded-xl' src={"https://www.youtube.com/embed/"+ VideoKey} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

        <CommentsContainer/>
    </div>
  )
}

export default WatchPage;