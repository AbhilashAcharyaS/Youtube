import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div>
        <div className='flex pt-20'>
            <Sidebar/>
            <MainContainer/>
        </div>
    </div>
  )
}

export default Body