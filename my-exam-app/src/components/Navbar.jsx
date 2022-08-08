import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
import "../scss/components-scss/navbar.scss";

const Navbar =() => {

    const [isOpen, setIsOpen] = useState (false);


    return(
        <div className="navbar">
            <div className="logo-holder">
                <img src={logo} alt="logo" width="130" height="80"/>
            </div>

            <div className="nav-holder">
                <nav className="nav">
                    <ul className={`nav-list ${isOpen && "open"}`}>
                        <Link className="nav-link" to = "/">Search Friend</Link>
                        <Link className="nav-link" to = "/stories">Our happy stories</Link>
                        <Link className="nav-link" to = "/contacts">Contacts</Link>
                    </ul>
                </nav>
            </div>

            <div className= {`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default Navbar;

