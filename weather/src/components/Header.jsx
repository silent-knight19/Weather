import React from "react";
import "../styles/Header.css";
const Header = () => {
    return (
        <header className="header">
            <input className="search-input" type="text" placeholder ="Search for a city..." />
            <button className="search-button">Search</button>
        </header>
    );
};
export default Header;
