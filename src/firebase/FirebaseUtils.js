import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
        apiKey: "AIzaSyBSXMs9netBsyGZExoRLUEy8G_8jwHYwZs",
        authDomain: "crown-ik-db.firebaseapp.com",
        projectId: "crown-ik-db",
        storageBucket: "crown-ik-db.appspot.com",
        messagingSenderId: "263988848220",
        appId: "1:263988848220:web:6fa1b11378bd90bd2f6899",
        measurementId: "G-9ZBELW0Q72"
      }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {dispalName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                dispalName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating user', error.message);
        }
    }

    return userRef

    // console.log(firestore.doc('users/12347yuikjn'));
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase