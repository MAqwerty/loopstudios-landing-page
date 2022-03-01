import React from "react";
import "./Layout.css"
import Logo from "./../../assets/svg/logo.svg"
import Menu from "./../../assets/svg/icon-hamburger.svg"
import Close from "./../../assets/svg/icon-close.svg"
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Layout (){

  useEffect(() => {

    let BOXul = document.getElementById("BOX-ul")
    let hamburger = document.getElementById("BTNMenu")
    let BTNClose = document.getElementById("BTNClose")

    hamburger.addEventListener("click",()=>{BOXul.style.display='block';})
    BTNClose.addEventListener("click",()=>{BOXul.style.display='none';})

  }, []);
  
  return (
    <>
      <nav className="PC-NAV" id="PC-NAV">
        <img src={Logo} alt="" />
        <ul className="PC-ul">
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/" id="PC-Home">Home</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/About" id="PC-About">About</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Careers" id="PC-Careers">Careers</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Events">Events</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Products">Products</Link>
          </li>
          <li className="PC-li">
            <Link className="PC-NAVlink" to="/Support">Support</Link>
          </li>
        </ul>
      </nav>

      <nav className="Mobile-NAV" id="Mobile-NAV">
        <img src={Menu} className="BTNMenu" id="BTNMenu" alt="Menu" />
        <img src={Logo} className="Mobile-Logo" alt="Logo" />
        <div className="BOX-ul" id="BOX-ul" >
          <img src={Logo} className="Mobile-Logo" alt="Logo" />
          <img src={Close} className="BTNClose" id="BTNClose" alt="Close" />
          <ul className="Mobile-ul">
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/" id="PC-Home">Home</Link>
            </li>
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/About" id="PC-About">About</Link>
            </li>
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/Careers" id="PC-Careers">Careers</Link>
            </li>
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/Events">Events</Link>
            </li>
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/Products">Products</Link>
            </li>
            <li className="Mobile-li">
              <Link className="Mobile-NAVlink" to="/Support">Support</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Layout;