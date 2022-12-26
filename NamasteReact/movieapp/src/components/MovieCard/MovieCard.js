import React from 'react';
import convertToRoman from '../../common/convertToRoman';
import "./MovieCard.scss";

const MovieCard = (props) => { 
    const{item, onToggle, active} = props;
    return (
        <div className={`card-item ${active ? 'active' :''}`} onClick={onToggle}>
            {/* <Link to={`/movie/${item.episode_id}`} > */}
                <div className='card-info flex'>
                    <h4 className='item'>Episodes {item.episode_id}</h4>
                    <strong className='item'>Episode {convertToRoman(item.episode_id)} - {item.title}</strong>
                    <p className='item'>{item.release_date}</p>
                </div>
            {/* </Link> */}
           {
            active && <div className={`card-detail flex`} >
             <p className='item'>{item.opening_crawl}</p>
         </div>
           }
        </div>
    );
};

export default MovieCard;