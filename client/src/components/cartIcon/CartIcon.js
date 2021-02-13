import React from "react";
import "./carticon.css";
import { ReactComponent as ShoppingIcon } from "../../assest/shoppingbag.svg";
import { toggleCartHidden } from "../redux/cart/CartAction";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/CartSelector";
 import {createStructuredSelector} from "reselect"

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count" onClick={toggleCartHidden}>{itemCount}</span>
    </div>
  );
};


// After
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
  // itemCount: cartItems.reduce(
    //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    //   0
    // ), 
  });

  // before
// const mapStateToProps = (state) => ({
  // itemCount: selectCartItemsCount(state)
  // itemCount: cartItems.reduce(
    //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    //   0
    // ),
  // });
  
  const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
