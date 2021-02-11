import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";
// import { auth } from "../../firebase/FirebaseUtils";
import {createStructuredSelector} from "reselect"

import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartdropdown/CartDropDown";

import{ selectCartHidden } from '../redux/cart/CartSelector'
import{ selectCurrentUser } from '../redux/user/UserSelector'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink 
  // ,OptionDiv
} from "../header/HeaderStyled"
import { signOutStart } from "../redux/user/UserAction";

const Header = ({currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
    
        <OptionsContainer>
          <OptionLink className="option" to="/shop">
            SHOP
          </OptionLink>
          <OptionLink to="/contact">
            CONTACT
          </OptionLink>
          {currentUser ? (
            // <OptionLink as="div"  onClick={() => auth.signOut()}>   
            <OptionLink as="div"  onClick={signOutStart}>   
              SIGNOUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">
              SIGNIN
            </OptionLink>
          )}
        <CartIcon />
        </OptionsContainer>
      
      { hidden ? (null) : (<CartDropDown />) }
    </HeaderContainer>
  );        
};



// createStructuredSelector this would pass our top level to each of them

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
 signOutStart: () => dispatch(signOutStart())
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


export default connect(
  mapStateToProps,
   mapDispatchToProps
    )(Header);

// without reselect
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//   // currentUser: state.user.currentUser,
//   // hidden: state.cart.hidden
//   currentUser,
//   hidden
// });









// return (
//   <HeaderContainer>
//     <LogoContainer to="/">
//       <Logo className="logo" />
//     </LogoContainer>
  
//       <OptionsContainer>
//         <OptionLink className="option" to="/shop">
//           SHOP
//         </OptionLink>
//         <OptionLink to="/contact">
//           CONTACT
//         </OptionLink>
//         {currentUser ? (
//           // <OptionLink as="div"  onClick={() => auth.signOut()}>   
//           <OptionLink as="div"  onClick={signOutStart}>   
//             SIGNOUT
//           </OptionLink>
//         ) : (
//           <OptionLink to="/signin">
//             SIGNIN
//           </OptionLink>
//         )}
//       <CartIcon />
//       </OptionsContainer>
    
//     { hidden ? (null) : (<CartDropDown />) }
//   </HeaderContainer>
// );        