import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/ChatSlice';
import { generateRandomNames, generateRandomText } from '../Utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);
    const [inputText, setInputText]= useState("");

    useEffect(()=>{
        const interval= setInterval(()=>{dispatch(addMessage({name:generateRandomNames(),message:generateRandomText(20).trim()}))},2000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    const handleSendChat=()=>{
        dispatch(addMessage({name:"User", message:inputText}));
        setInputText("");
    }
    
  return (
    <div className='p-2 rounded-xl border border-black w-full h-[420px] bg-slate-100'>
        <h4 className='text-center font-semibold border-b-black border'>Live Chat</h4>
        <div className='h-[320px] overflow-y-scroll flex flex-col-reverse border border-b-black'>
            {
                chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)
            }
        </div>
        <div className='flex justify-between w-full p-2'>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} className='w-full p-1 rounded-l-lg' placeholder='Enter your message' onKeyDown={(e)=>{if(e.key == 'Enter') handleSendChat()}} />
            <button className='bg-blue-300 p-2 rounded-r-lg' onClick={handleSendChat}>Send</button>
        </div>
    </div>
  )
}

export default LiveChat