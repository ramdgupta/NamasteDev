import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { getAllMovies } from '../../feature/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
    const data =  useSelector(getAllMovies);
    const isEmpty = Object.keys(data.movies).length;
    const [clicked, setClicked] = useState("0");
    const handelToggle = (movieId)=>{
          if(clicked===movieId){
            setClicked("0");
          }
          setClicked(movieId);
    }
   let renderMovies = "";
   renderMovies =
   isEmpty > 0 ? (
    data.movies.map((movie) => (
        <MovieCard key={movie.episode_id} item={movie}  onToggle={()=>handelToggle(movie.episode_id)} active={clicked===movie.episode_id}/>
      ))
    ) : (
      <div className="movies-error">
        <h3>Loading...</h3>
      </div>
    ); 
   return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <div className="movie-container">
                {renderMovies}
            </div>
        </div>
  </div>
    )
}  

export default MovieListing;