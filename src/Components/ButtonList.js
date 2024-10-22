import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const tagList=["All","Coding","Music","AI","Live","Stocks","Podcasts","Movies","Kannada","Information Technology","Cricket","Football"];

  return (
    <div className='flex '>
        <div className=' flex overflow-x-scroll no-scrollbar'>

        { tagList.map((tag,index,tagList)=> <Button key={index} name={tag}></Button> )}    
      </div>
        
    </div>
  )
}

export default ButtonList