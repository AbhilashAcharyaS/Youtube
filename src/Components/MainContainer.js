import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const menuOpen= useSelector(store=>store.app.isMenuOpen);
  return (
    <div className={menuOpen?"opacity-50 w-full":"opacity-100 w-full"}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer