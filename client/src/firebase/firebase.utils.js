import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, collection, getDocs } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAb9UlJHKZQkqFaA3vJ25mgqsIOIl1CEQY",
  authDomain: "ecommerceztom.firebaseapp.com",
  databaseURL: "https://ecommerceztom.firebaseio.com",
  projectId: "ecommerceztom",
  name: "EcommerceZtoM",
  storageBucket: "ecommerceztom.appspot.com",
  messagingSenderId: "745149943574",
  appId: "1:745149943574:web:5e4d9e56554d82c35f8a37",
};

const firebase = initializeApp(config);
export const firestore = getFirestore(firebase);
// export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = doc(`users/${userAuth.uid}`); //Query Reference
  const snapShot = await userRef.get(); //Document Reference, getting snapshot (Document Snapshot)
  if (!snapShot.exists) {
    //Return true if document exists
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (ex) {
      console.log("error", ex.message);
    }
  }
  return userRef;
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = await getDocs(collection(firestore, collectionKey));
  const batchFirestore = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batchFirestore.set(newDocRef, object);
  });
  return await batchFirestore.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const auth = getAuth(firebase);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
