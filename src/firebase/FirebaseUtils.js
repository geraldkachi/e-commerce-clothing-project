import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBSXMs9netBsyGZExoRLUEy8G_8jwHYwZs",
  authDomain: "crown-ik-db.firebaseapp.com",
  databaseURL: "https://crown-ik-db-default-rtdb.firebaseio.com",
  projectId: "crown-ik-db",
  storageBucket: "crown-ik-db.appspot.com",
  messagingSenderId: "263988848220",
  appId: "1:263988848220:web:6fa1b11378bd90bd2f6899",
  measurementId: "G-9ZBELW0Q72",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get()
  // console.log({collection: collectionSnapshot.docs.map(doc => data())});

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

  // console.log(firestore.doc('users/12347yuikjn'));
};

// export const addCollectionAndItems = (collectionKey, objectsToAdd) => {}
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const covertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// bennettfeely.com

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Apply here https://forms.gle/zRMwF2yzW3BVCGHe6    react javascript 

// Please apply by filling out the form below:  React Native
// https://forms.gle/BZYXeVt1tvbYJ6X57  

// https://oresume.com/