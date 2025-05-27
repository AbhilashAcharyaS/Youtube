import React from 'react'
import { USER_ICON } from '../Utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center py-2 shadow-sm'>
        <img src={USER_ICON} alt="user" className='h-6' />
        <span className='font-semibold px-2'>{name}:</span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage