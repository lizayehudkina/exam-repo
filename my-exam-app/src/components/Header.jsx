import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

const Header = () => {

    const [active, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!active);
      };

      return (
    // <header className="header">
    <header className={active ? "active" : null}>
        <div className="header-container header" >
            <div className="logo-holder">
                <img src={logo} alt="logo" width="130" height="80"/>
            </div>

            <div className="nav-holder js-nav">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link className="nav-link" to = "/">Search Friend</Link></li>
                        <li className="nav-item"><Link className="nav-link" to = "/stories">Our happy stories</Link></li>
                        <li className="nav-item"><Link className="nav-link" to = "/contacts">Contacts</Link></li>
                    </ul>
                </nav>
            </div>

            <button className="nav-opener js-nav-opener">
                {/* <span></span> */}
                {<span onClick={handleToggle}></span>}
            </button>
        </div>
    </header>
    )  
}

export default Header;
