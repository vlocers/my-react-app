import React from "react";
import Logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={Logo} />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="menu">Menu</Link>
          <Link to="about">Hakkımızda</Link>
          <Link to="contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
