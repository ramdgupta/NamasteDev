import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/FilterMenu";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.scss";
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">Movie App</Link>
                <Navigation/>
                <Filter/>
            </div>
            <Search/>
        </div>
    );
};

export default Header;