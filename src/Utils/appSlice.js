import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:false,
        showSideBar:false,
    },
    reducers:{
        toggleMenu :(state,action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        },
        setSideBarOff : (state)=>{
            state.showSideBar=false
        }
        
    }
})

export const {toggleMenu,setSideBarOff, closeMenu} = appSlice.actions;
export default appSlice.reducer;