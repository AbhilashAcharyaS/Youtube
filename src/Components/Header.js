import React from 'react'
import { Hamburger_Menu_Icon,USER_ICON, Youtube_Logo } from '../Utils/constants'
import ButtonList from './ButtonList'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Header = () => {

  const dispatch= useDispatch();
  const onHamMenuClick = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='flex justify-between py-4 shadow-md fixed w-full z-20 bg-white'>

        <div className='flex w-3/12'>
        <img onClick={onHamMenuClick} className='h-8 mx-4 cursor-pointer' src={Hamburger_Menu_Icon} alt="HamburgerMenu" />
        <a href='/'>
        <img className='h-6 m-1' src={Youtube_Logo} alt="Youtube Logo" />
        </a>
        </div>
        <div className=' w-6/12'>
            <input className='border border-gray-400 w-4/5 p-2 pt-[9px] rounded-l-full text-center' type="text" placeholder='Search' />
            <button className='border border-gray-400 w-1/12 p-2 pb-[13px] rounded-r-full bg-gray-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 -mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </button>
        </div>
        <div className='w-2/12'>
            <img className='h-10' src={USER_ICON} alt='userIcon'/>

        </div>
        
    </div>
  )
}

export default Header