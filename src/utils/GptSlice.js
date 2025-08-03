import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"Gpt",
    initialState:{
        gptButton:false,
        searchedMovies:null,
        userInput:null,
        fetchedMovies:null,
        isLoading:false
    },
    reducers:{
        toggleGptButton:(state)=>{
            state.gptButton = !state.gptButton
        },
        addSearchedMovies:(state,action)=>{
            state.searchedMovies = action.payload
        },
        addFetchedMovies:(state,action)=>{
            state.fetchedMovies= action.payload
            state.isLoading = false;
        },
        addUserInput:(state,action)=>{
            state.userInput= action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload
        }
    }
})

export const {toggleGptButton,addSearchedMovies,addFetchedMovies,addUserInput,setLoading} = GptSlice.actions;
export default GptSlice.reducer;