import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        populorMovies:null,
        topRated:null,   
        upcomingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addPopulorMovies:(state,action)=>{
            state.populorMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailer,addPopulorMovies,addTopRated,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;