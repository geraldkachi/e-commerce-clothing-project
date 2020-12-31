import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";

const Header = () => {
  return (
    <div className="header justify-content-between">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="">
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
        <Link className="option" to="/c0ntact">
          CONTACT
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
