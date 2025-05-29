import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../Utils/searchVideoSlice';
import SearchPageVideoCard from './SearchPageVideoCard';
import ButtonList from './ButtonList';

const SearchResult = () => {

    const params= useParams();
    // console.log(params);
    const dispatch= useDispatch();
    const searchVideos=useSelector(store=>store.searchVideos?.videos);

    const getSearchResult= async ()=>{
        const data= await fetch (YOUTUBE_SEARCH_VIDEOS_API+params.query);
        const json= await data.json();
        // console.log(json.items);
        dispatch(addVideos({query:params.query, result:json.items}))
    }

    useEffect(()=>{
        if(!searchVideos[params.query])
        getSearchResult();
    },[])

    // if(searchVideos?.videos?.length==0) return(<><ButtonList/> <h1 className='mt-10 text-center'>No Vidoes found for the search query!</h1> </>) 
  return (
    <div>
        <ButtonList/>
        {searchVideos.length>0 && searchVideos[0]?.result.map((vid)=>(<SearchPageVideoCard info={vid} key={vid.id.videoId} watchPage={false} />)) }
        {/* {
            !(searchVideos[0]?.result) && <h1 className='mt-10 text-center'>No Vidoes found for the search query!</h1>
        } */}

    </div>
  )
}

export default SearchResult