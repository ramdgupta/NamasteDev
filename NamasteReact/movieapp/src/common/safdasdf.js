import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../feature/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
const Movie = (props) => {
    const {content} = props
   const data =  useSelector(getAllMovies);
   const isEmpty = Object.keys(data.movies).length;
   let renderMovies = "";
   renderMovies =
   isEmpty > 0 ? (
    data.movies.map((movie) => (
        <MovieCard key={movie.episode_id} item={movie} content={content} />
      ))
    ) : (
      <div className="movies-error">
        <h3>Loading...</h3>
      </div>
    ); 
    return (
        <div>
            {renderMovies}
        </div>
    );
};

export default Movie;