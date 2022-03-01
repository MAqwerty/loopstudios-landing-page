import "./style-Nav-footer.css"
import Logo from "./../../assets/svg/logo.svg"
import Facebook from "./../../assets/svg/icon-facebook.svg"
import Instagram from "./../../assets/svg/icon-instagram.svg"
import Pinterest from "./../../assets/svg/icon-pinterest.svg"
import Twitter from "./../../assets/svg/icon-twitter.svg"

import { Link } from "react-router-dom";

function Footer () {

    return(
        <>
            <div className="FOOTER-container">
                <img src={Logo} className="footer-Logo" alt="" />

                <nav className="footer-PC-NAV" id="PC-NAV">
                    <ul className="footer-PC-ul">
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/" id="PC-Home">Home</Link>
                        </li>
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/About" id="PC-About">About</Link>
                        </li>
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/Careers" id="PC-Careers">Careers</Link>
                        </li>
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/Events">Events</Link>
                        </li>
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/Products">Products</Link>
                        </li>
                        <li className="Footer-PC-li">
                        <Link className="PC-NAVlink" to="/Support">Support</Link>
                        </li>
                    </ul>
                </nav>

                <article className="Footer-Media-SVG">     
                    <a href="" className="Footer-Media-a"><img src={Facebook}/></a>
                    <a href="" className="Footer-Media-a"><img src={Twitter}/></a>  
                    <a href="" className="Footer-Media-a"><img src={Pinterest}/></a>
                    <a href="" className="Footer-Media-a"><img src={Instagram}/></a>    
                </article>

                <p className="Footer-TEXT">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;