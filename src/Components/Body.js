import React from 'react'
import Sidebar from './Sidebar'
// import VideoContainer from './VideoContainer'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <div className='flex pt-20 no-scrollbar'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Body