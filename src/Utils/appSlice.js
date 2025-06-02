import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:false,
        showSideBar:false,
        darkMode:false
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
        },

        toggleDarkMode :(state,action)=>{
            state.darkMode= !state.darkMode;
        }
        
    }
})

export const {toggleMenu,setSideBarOff, closeMenu, toggleDarkMode} = appSlice.actions;
export default appSlice.reducer;