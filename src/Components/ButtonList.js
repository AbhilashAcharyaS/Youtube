import React, { useEffect, useState } from 'react'
import Button from './Button'
import { YOUTUBE_VIDEO_CATEGORIES_API } from '../Utils/constants';

const ButtonList = () => {

  const tagList=["All","Coding","Music","AI","Live","Stocks","Podcasts","Movies","Kannada","Technology","Cricket","Football"];

  const [tagLists, setTagList]= useState([]);

  const getVideoCategories=async()=>{
    const data= await fetch(YOUTUBE_VIDEO_CATEGORIES_API);
    const json= await data.json();
    const tags= json?.items?.map((x)=>x.snippet.title);
    // console.log(tags);
    setTagList(tags);
  }

  useEffect(()=>{getVideoCategories()},[])

  if(!tagList) return;

  return (
        <div className=' flex justify-between overflow-x-scroll no-scrollbar ml-20'>

        { tagList.map((tag,index,tagList)=> <Button key={index} name={tag}></Button> )}    
      </div>
  )
}

export default ButtonList