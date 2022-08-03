import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

const Header = () => {

    // let navOpener = document.querySelector('.js-nav-opener');
    // let header = document.querySelector('.js-header');

    // navOpener.addEventListener('click', () => {
    //     if (header.classList.contains('active')) {
    //         header.classList.remove('active');
    //     } else {
    //         header.classList.add('active');
    //     }
    // });

return (

    <header className="header">
        <div className="header-container">
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
                <span></span>
            </button>
        </div>
    </header>
    )  
}

export default Header;
