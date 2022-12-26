import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, getAllMovies } from '../../feature/movies/movieSlice';

const Search = () => {
    const [term, setTerm] = useState("");
    const dispatch =  useDispatch();
    const data = useSelector(getAllMovies);
     const submitHandler = (e) => {
        e.preventDefault();
        // Create copy of item list
        let getSearchData = data.movies.find((item)=> {return item.title.toLowerCase() === term.toLowerCase()})
        console.log('getSearchData', getSearchData)
        if(getSearchData){
            dispatch(fetchAsyncMovies([getSearchData]));
        }
        
    }
    
    return (
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input type="text" value={term} placeholder="Search movie name" onChange={(e)=>setTerm(e.target.value)}/>
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default Search;