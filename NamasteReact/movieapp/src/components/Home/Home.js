import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//import movieApi from "../../common/apis/movieapi";
import {fetchAsyncMovies} from '../../feature/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const Home = () => {
    const dispatch = useDispatch();
    //const [movie, setMovie] = useState(null);
    
     useEffect (()=>{
    //     const fetchMovies = async()=>{
    //         try{
    //          const response = await movieApi.get();
    //         // console.log('response inner', response);
    //          dispatch(addMovies(response.data.results))
        
    //         }catch(e){
    //          console.log('SomeThing wrong');
    //         } 
    //      }
    //     // if [], run once the page is loads , and dont run again
    //     fetchMovies();
        dispatch(fetchAsyncMovies());
       },[dispatch]);
    return (
        <div>
            <MovieListing/>
        </div>
    );
};

export default Home;