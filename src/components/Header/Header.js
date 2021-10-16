import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h2>Salary Management App</h2>
    </nav>
  );
};

export default Header;
