import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.scss';

const Navigation = () => {
    return (
        <nav className='top-nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;