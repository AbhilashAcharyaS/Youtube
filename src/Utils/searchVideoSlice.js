import { createSlice } from "@reduxjs/toolkit";

const searchVideoSlice= createSlice({
    name:"searchVideo",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videos.push(action.payload)
        }
    }
})

export const {addVideos} = searchVideoSlice.actions;

export default searchVideoSlice.reducer;