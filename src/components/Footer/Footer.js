import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      2020- {new Date().getFullYear()} &copy; Copyright All right Reserved By
      <a
        href="https://www.facebook.com/dev.farhanNahid"
        rel="noreferrer"
        target="_blank"
      >
        Farhan
      </a>
    </footer>
  );
};

export default Footer;
