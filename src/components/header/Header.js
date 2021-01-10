import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";
import { auth } from "../../firebase/FirebaseUtils";
import {createStructuredSelector} from "reselect"

import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartdropdown/CartDropDown";

import{ selectCartHidden } from '../redux/cart/CartSelector'
import{ selectCurrentUser } from '../redux/user/UserSelector'

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
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
              SIGNOUT
            </div>
          ) : (
            <Link to="/signin" className="option">
              SIGNIN
            </Link>
          )}
        <CartIcon />
        </div>
      </div>
      { hidden ? (null) : (<CartDropDown />) }
    </div>
  );
};



// createStructuredSelector this would pass our top level to each of them

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


//      OR
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });



// const mapStateToProps = (state) => ({
//   // currentUser: state.user.currentUser,
//   // hidden: state.cart.hidden
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });


export default connect(mapStateToProps)(Header);

// without reselect
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//   // currentUser: state.user.currentUser,
//   // hidden: state.cart.hidden
//   currentUser,
//   hidden
// });

