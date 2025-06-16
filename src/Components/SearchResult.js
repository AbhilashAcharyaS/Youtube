import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../Utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addVideos } from '../Utils/searchVideoSlice';
import SearchPageVideoCard from './SearchPageVideoCard';
import ButtonList from './ButtonList';

const SearchResult = () => {

    const params= useParams();
    // console.log(params);
    // const dispatch= useDispatch();
    // const searchVideos=useSelector(store=>store.searchVideos?.videos);
    const [pageToken,setPageToken]= useState(null);
    const [videos,setVideos] = useState([]);

    const getSearchResult= async ()=>{
        const data= await fetch (YOUTUBE_SEARCH_VIDEOS_API+params.query);
        const json= await data.json();
        // console.log(json);
        // dispatch(addVideos({query:params.query, result:json.items}))
        setVideos(json.items)
        await setPageToken(json.nextPageToken);
    }

    useEffect(()=>{
        // if(!searchVideos[params.query])
        getSearchResult();
    },[])

    const handleInfiniteScrollSearch=async()=>{
        if(window.innerHeight+ document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
            console.log("Api call with ", pageToken);
            const data= await fetch(YOUTUBE_SEARCH_VIDEOS_API+params.query+"&pageToken="+pageToken);
            const json= await data.json();
            // dispatch(addVideos({query:params.query,result:json.items}));
            let unique= new Set([...videos, ...json.items]);
            // const uniqueArr= Array.from(unique);
            setVideos(Array.from(unique));
            setPageToken(json?.nextPageToken);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleInfiniteScrollSearch);
        return ()=>window.removeEventListener("scroll",handleInfiniteScrollSearch);
    },[pageToken])

    if(!videos || videos.length==0) return(<div className='w-full'> <ButtonList/> <h1 className='my-20 text-center text-xl'>No Vidoes found for the search query!</h1> </div>) ;

  return (
    <div>
        <ButtonList/>
        {videos?.map((vid)=>(<SearchPageVideoCard info={vid} key={vid.id?.videoId}/>)) }
        {/* {
            !(searchVideos[0]?.result) && <h1 className='mt-10 text-center'>No Vidoes found for the search query!</h1>
        } */}

    </div>
  )
}

export default SearchResult