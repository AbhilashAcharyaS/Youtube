import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:false,
        showSideBar:true,
    },
    reducers:{
        toggleMenu :(state,action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        setSideBarOff : (state)=>{
            state.showSideBar=false
        }
        
    }
})

export const {toggleMenu,setSideBarOff} = appSlice.actions;
export default appSlice.reducer;