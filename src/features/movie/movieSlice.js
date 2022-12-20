import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState={
    movies:[],
    getSelectedMovieDetails:{}
}

const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action) =>{
            state.movies=action.payload;
        }
    },
});
export const {setMovies}=movieSlice.actions;
export const selectMovies =(state)=>state.movies.movies;
export const movieReducer=movieSlice.reducer;