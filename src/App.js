import React from "react";
import "./App.css";
import HomePage from "./components/pagesapp/homepage/HomePage";
import ShopPage from "./components/pagesapp/shoppage/ShopPage"; 
import Header from "./components/header/Header"
import SiginSignup from "./components/pagesapp/signIn-and-signUp/SiginSignup";
import {auth, createUserProfileDocument} from './firebase/FirebaseUtils'

import { Route, Switch } from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }  
          })
          // console.log(this.state);
        })

      }
      
      
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  //   auth.onAuthStateChanged(user => {
  //     setCurrUser(user)
  //     console.log(user) 
  //   }
  // )
 
  
  render(){
    const {currentUser} = this.state
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SiginSignup} />
        </Switch>
      </>
    );
  }
};

// online mentor ubong king

export default App;



















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