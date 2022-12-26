import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, getAllMovies } from '../../feature/movies/movieSlice';
import "../Filter/Filter.scss"
const Filter = () => {
    const [show, setShow] = useState(false);
    const dispatch =  useDispatch();
    const data = useSelector(getAllMovies);
    const clickHandler = (e, term) => {
        e.preventDefault();
       // console.log('term', term, term())
        dispatch(fetchAsyncMovies(term()))
    }
    const byEpisode = ()=>{
        return data.movies.slice().sort((a, b)=>{
            return a.episode_id - b.episode_id;
       });
    }
    const byYear = ()=>{
        return data.movies.slice().sort((a, b)=>{
             return new Date(a.release_date).valueOf() - new Date(b.release_date).valueOf();  
        });
    }
    const reset = (e) =>{
        e.preventDefault();
        dispatch(fetchAsyncMovies())
    }
    return (
        <div onClick={()=> setShow(!show)} className={`filter-nav top-nav flex ${show ? 'active' : ""}`}>
         
        {/* 
           <div className="filter-nav" onClick={()=> setShow(!show)}> Sort By </div>
           { show && <ul>
                <li onClick={(e)=>clickHandler(e,byEpisode)}>Episode</li>
                <li onClick={(e)=>clickHandler(e,byYear)}>Year</li>
            </ul>}
            <div className="filter-nav" onClick={(e)=>reset(e)}> Reset </div>
           */}
           <div className='sort-by'>Sort By:</div>
           <ul>
                <li onClick={(e)=>clickHandler(e,byEpisode)}>Episode</li>
                <li onClick={(e)=>clickHandler(e,byYear)}>Year</li>
                <li onClick={(e)=>reset(e)}> Reset </li>
            </ul>
        </div> 
          
    );
};

export default Filter;