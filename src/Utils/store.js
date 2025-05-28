import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachSuggestionSlice from "./searchSuggestionSlice";
import ChatSlice from "./ChatSlice";
import searchVideoSlice from "./searchVideoSlice"

const store= configureStore({
    reducer:{
        app : appSlice,
        search : seachSuggestionSlice,
        chat:ChatSlice,
        searchVideos:searchVideoSlice
    }
})

export default store;