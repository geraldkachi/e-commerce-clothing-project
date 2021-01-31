import React from "react";
import "./App.css";
import HomePage from "./components/pagesapp/homepage/HomePage";
import ShopPage from "./components/pagesapp/shoppage/ShopPage"; 
import Header from "./components/header/Header"
import SiginSignup from "./components/pagesapp/signIn-and-signUp/SiginSignup";
import {
  auth, 
  createUserProfileDocument, 
  // addCollectionAndDocuments
} from './firebase/FirebaseUtils'

import { Route, Switch, Redirect } from "react-router-dom";

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { setCurrentUser } from "./components/redux/user/UserAction";
import{ selectCurrentUser } from './components/redux/user/UserSelector'

import CheckOutPage from "./components/pagesapp/checkout/CheckOutPage";
// import { selectorCollectionsForPreview } from "./components/redux/shop/ShopSelector";



class App extends React.Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser, 
      // collectionsArray
     } = this.props
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }  
          // })
          // console.log(this.state);
        })

      }
      
      
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render(){

    const { currentUser } = this.props

    return (
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SiginSignup />)} />
        </Switch>
      </>
    );
  }
};

// const mapStateToProps = ({user}) => ({
//     currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectorCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  // null,
  mapStateToProps,
  mapDispatchToProps 
  )(App)
// export default connect(null, mapStateToProps,mapDispatchToProps )(App);










// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=dbd522026b4f096fd20c&state=b09b5dcc-d6e0-4082-b97a-dba30b0188e9








// firebase

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBSXMs9netBsyGZExoRLUEy8G_8jwHYwZs",
//     authDomain: "crown-ik-db.firebaseapp.com",
//     projectId: "crown-ik-db",
//     storageBucket: "crown-ik-db.appspot.com",
//     messagingSenderId: "263988848220",
//     appId: "1:263988848220:web:6fa1b11378bd90bd2f6899",
//     measurementId: "G-9ZBELW0Q72"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>




// https://bit.ly/368WXyl

// https://passmyinterview.com/21-great-answers-to-tough-interview-questions/