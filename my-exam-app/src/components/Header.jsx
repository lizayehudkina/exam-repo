import { Link } from "react-router-dom";
import logo from '../img/logo.svg';

const Header = () => {
return (
    <header className="header-container">
        <nav className="nav">
            <div className="logo-holder">
                <img src={logo} alt="logo" width="130" height="80"/>
            </div>
            <ul className="nav-list">
                <li className="nav-item"><Link className="nav-link" to = "/">Search Friend</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/stories">Our happy stories</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </header>
    )  
}

export default Header;
