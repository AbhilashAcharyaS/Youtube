import { createSlice } from "@reduxjs/toolkit";
import { MAX_LIVE_CHAT_COUNT } from "./constants";

const ChatSlice=createSlice({
    name:"Chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // if(state.messages.length>MAX_LIVE_CHAT_COUNT){
            //     state.messages.length = MAX_LIVE_CHAT_COUNT;
            // }
            state.messages.splice(MAX_LIVE_CHAT_COUNT,1)
            state.messages.unshift(action.payload);
        }
    }
})

export default ChatSlice.reducer;
export const {addMessage} = ChatSlice.actions;