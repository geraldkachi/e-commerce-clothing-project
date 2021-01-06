import React from "react";
import "./App.css";
import HomePage from "./components/pagesapp/homepage/HomePage";
import ShopPage from "./components/pagesapp/shoppage/ShopPage"; 
import Header from "./components/header/Header"
import SiginSignup from "./components/pagesapp/signIn-and-signUp/SiginSignup";
import {auth, createUserProfileDocument} from './firebase/FirebaseUtils'

import { Route, Switch, Redirect } from "react-router-dom";

import {connect} from "react-redux"
import { setCurrentUser } from "./components/redux/user/UserAction";


class App extends React.Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props
    
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
      
      
      setCurrentUser({currentUser: userAuth})
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
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SiginSignup />)} />
        </Switch>
      </>
    );
  }
};


const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps )(App);










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