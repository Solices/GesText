import React from "react";
import { Link } from "react-router-dom";




function Navbar() {
    return(
        <header class = "menu">
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}><b href="#" class = "logo">GesText</b></Link>
            <ul>
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/app">App</Link></li>

            <li><Link to="/how">How We Built It</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </header>

    );
}

export default Navbar;