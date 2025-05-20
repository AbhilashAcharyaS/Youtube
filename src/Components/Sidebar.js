import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  const sideBar= useSelector(store=>store.app.showSideBar);

  if(!isMenuOpen) return null;

  // if(!isMenuOpen) return (
  //   <div className='w-1/12 h-screen shadow-md px-2'>
  //     <div className='py-4 text-center'>
  //       <p className='font-semibold text-xs py-4'><Link to='/'>Home</Link></p>
  //       <p className='font-semibold text-xs py-4'>Shorts</p>
  //       <p className='font-semibold text-xs py-4'>Subscriptions</p>
  //       <p className='font-semibold text-xs py-4'>You</p>
  //     </div>
  //     </div>
  // );

  return (
    isMenuOpen && 
    <div className='w-1/6 -mt-2 h-screen shadow-md px-8 fixed z-10 bg-white'>
      <div className='border-b py-4'>
        <p className='font-semibold text-md py-1'><Link to='/'>Home</Link></p>
        <p className='font-semibold text-md py-1'>Shorts</p>
        <p className='font-semibold text-md py-1'>Subscription</p>
      </div>
      <div className='py-4 border-b'>
        <h1 className='font-semibold text-lg'>You &gt; </h1>
        <p>Your Channel</p>
        <p>History</p>
        <p>PlayLists</p>
        <p>Your Videos</p>
        <p>Watch Later</p>
        <p>Liked Videos</p>
      </div>
      <div className='py-4'>
        <h1 className='font-semibold text-lg'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>Sports</li>
          <li>Coding</li>
          <li>News</li>
        </ul>
      </div>
    </div>


  )
}

export default Sidebar