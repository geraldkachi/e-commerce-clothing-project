import React, { useEffect } from "react";
// import "./App.css";
import HomePage from "./components/pagesapp/homepage/HomePage";
import ShopPage from "./components/pagesapp/shoppage/ShopPage"; 
import Header from "./components/header/Header"
import SiginSignup from "./components/pagesapp/signIn-and-signUp/SiginSignup";
// import {
  // auth, createUserProfileDocument, 
  // addCollectionAndDocuments
// } from './firebase/FirebaseUtils'

import { Route, Switch, Redirect } from "react-router-dom";

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
// import { setCurrentUser } from "./components/redux/user/UserAction";
import{ selectCurrentUser } from './components/redux/user/UserSelector'

import CheckOutPage from "./components/pagesapp/checkout/CheckOutPage";
import { checkUserSession } from "./components/redux/user/UserAction";
import { GlobalStyle } from "./globalstyle/GlobalStyle";
// import { selectorCollectionsForPreview } from "./components/redux/shop/ShopSelector";





const App = ({ checkUserSession, currentUser }) => { 


  // const unsubscribeFromAuth = null

  useEffect(() =>{
    // const {checkUserSession} = this.props
    checkUserSession()
  }, [checkUserSession])
  // componentDidMount(){
  //   const {checkUserSession} = this.props
  //   checkUserSession()
  // }
  // componentDidMount(){
  //   const { setCurrentUser, 
  //     // collectionsArray
  //    } = this.props
    
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth)

  //       userRef.onSnapshot(snapShot => {
  //         // setCurrentUser({
  //         //     id: snapShot.id,
  //         //     ...snapShot.data()
  //         // })
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }  
  //         })
  //         // console.log(this.state);

  //       })

  //     }
  //     setCurrentUser(userAuth)
  //     // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
  //   })
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth()
  // }
  

    return (
      <>
      <GlobalStyle />
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SiginSignup />)} />
        </Switch>
      </>
    );
};

// const mapStateToProps = ({user}) => ({
//     currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectorCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
  //  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// const mapDispatchToProps = dispatch => ({
//    setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(
  // null,
  mapStateToProps,
  mapDispatchToProps 
  )(App)


/////////////////////////////////////////
// const UseEffectExample = () => {
// // useState
// const [user, setUser] = useState(null)
// const [searchQuery, setSearchQuery] = useState('kachi')

// // useEffect 

// useEffect(() => {
//   const fetchFunc = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode/com/users?username=$()`)
//     const resJson = await res.json();
//     selectCurrentUser(resJson[0])
//   }

//   // to call it 
//   fetchFunc()
// }, [searchQuery])

// return (
//   <>
//     <input type="search" value={searchQuery}
//     onChange={ (e) => setSearchQuery(e.target.value)} />
//     {user ? (
//         <div>
//           <h3>{user.name}</h3>
//           <h3>{user.username}</h3>
//           <h3>{user.email}</h3>
//         </div>
//     ) : (
//       <p>No user found</p>
//     )}
//   </>
// )
// }
//////////////////////////////////////////////////////

// https://benneteely.com/



// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=dbd522026b4f096fd20c&state=b09b5dcc-d6e0-4082-b97a-dba30b0188e9



// server side 
// cors: cross oridine request

// express is just a library that allows us to build an API server easily



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

// https://bennettfeely.com

// https://passmyinterview.com/21-great-answers-to-tough-interview-questions/


// mkdir client
// https://github.com/ZhangMYihua/react-context-complete

// 08139842230  goTv

// We should never talk about ourselves,
// but rather, get others to talk about
// themselves.