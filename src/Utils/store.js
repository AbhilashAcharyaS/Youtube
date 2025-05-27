import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachSlice from "./searchSlice";
import ChatSlice from "./ChatSlice"

const store= configureStore({
    reducer:{
        app : appSlice,
        search : seachSlice,
        chat:ChatSlice
    }
})

export default store;