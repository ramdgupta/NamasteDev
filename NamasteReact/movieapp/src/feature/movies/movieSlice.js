import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieapi";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async(term) =>{
        const response = await movieApi.get();
         return term ? term : response.data.results     
        }
);
const initialState = {
    movies:{},
}
const movieSLice = createSlice({
    name : "movies",
    initialState,
    reducers:{
        addMovies:(state, {payload}) =>{
            state.movies = payload;
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
            
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("Fetched Successfully");
            return{...state, movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");
        }
    }
});

export const {addMovies} = movieSLice.actions;
export const getAllMovies = (state) => state.data;
export default movieSLice.reducer;