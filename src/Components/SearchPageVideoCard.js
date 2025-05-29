import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SearchPageVideoCard = ({info}, {watchPage}) => {
    // console.log(info);
    const {channelTitle,description,publishTime,thumbnails,title} = info?.snippet;
    const navigate=useNavigate();

    const handleClick=()=>{
        // console.log(info.id);
        // if(watchPage){
        //     navigate("/watch?v="+info?.id)
        // }
        // else{
            navigate("/watch?vx="+info?.id?.videoId)
        // }
    }

    if(!watchPage){
        return (<div className='flex my-4 w-full' onClick={()=>handleClick()}>
        <div className='w-1/2'>
            <img src={thumbnails.high.url} alt="video" className=' aspect-video rounded-xl hover:scale-105 cursor-pointer' />
        </div>
        <div className='flex flex-col w-1/2 px-2'>
            <h3 className='font-semibold py-2 text-xs'>{title}</h3>
           {channelTitle && <p className='font-bold py-1 text-xs'>{channelTitle}</p>}
            {watchPage && <p className='h-[100px] overflow-hidden text-xs'>{description}</p>}
        </div>
    </div>)
    }
    else
  return (
    
        <Link to={"/watch?v="+info.id} >
        <div className='flex my-4 w-full'>
        <div className='w-1/2'>
            <img src={thumbnails.high.url} alt="video" className=' aspect-video rounded-xl hover:scale-105 cursor-pointer' />
        </div>
        <div className='flex flex-col w-1/2 px-2'>
            <h3 className='font-semibold py-2 text-xs'>{title}</h3>
           {channelTitle && <p className='font-bold py-1 text-xs'>{channelTitle}</p>}
            {watchPage && <p className='h-[100px] overflow-hidden text-xs'>{description}</p>}
        </div>
    </div>
        </Link>
    
  )
}

export default SearchPageVideoCard