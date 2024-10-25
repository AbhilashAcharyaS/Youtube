import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachSlice from "./searchSlice"

const store= configureStore({
    reducer:{
        app : appSlice,
        search : seachSlice,
    }
})

export default store;