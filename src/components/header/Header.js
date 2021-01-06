import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";
import { auth } from "../../firebase/FirebaseUtils";

import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartdropdown/CartDropDown";

const Header = ({currentUser, hidden}) => {
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
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="option">
              SIGN IN
            </Link>
          )}
        <CartIcon />
        </div>
      </div>
      { hidden ? (null) : (<CartDropDown />) }
    </div>
  );
};

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  // currentUser: state.user.currentUser,
  // hidden: state.cart.hidden
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
