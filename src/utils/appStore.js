import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice"
import movieSliceReducer from "./movieSlice"
import gptSliceReducer from "./GptSlice"


const appStore = configureStore({
    reducer:{
        user:userSliceReducer,
        movie: movieSliceReducer,
        gpt:gptSliceReducer,
    },
})

export default appStore;