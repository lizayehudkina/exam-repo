import { Link } from "react-router-dom";
import instaLink from '../img/insta.svg';
import logo from '../img/logo.svg';


const Footer = () => {
    return (
        <>
        <footer className="footer-container">
            <h4>You can contact us via Instagram:</h4>
                <a className="footer-link" href="https://www.instagram.com/sobaki_i_elena/">
                    <img className="footer-insta-img" src={instaLink} alt="instagram link" />
                </a>
            
            <div className="footer-text-holder"> 
                <p><strong>If you want help, you can donate:</strong> <br /> 4149 6293 5269 9383</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;