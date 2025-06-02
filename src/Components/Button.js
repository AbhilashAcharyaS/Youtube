import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({name}) => {

const darkMode= useSelector(store=>store.app.darkMode)
  return (
    <div>
      <button className={` ${darkMode? "bg-gray-800 ":"bg-gray-300 "} px-4 text-sm py-1 m-2 rounded-lg`}> {name} </button>
    </div>
  )
}

export default Button