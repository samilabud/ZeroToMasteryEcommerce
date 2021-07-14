import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAb9UlJHKZQkqFaA3vJ25mgqsIOIl1CEQY",
    authDomain: "ecommerceztom.firebaseapp.com",
    databaseURL: "https://ecommerceztom.firebaseio.com",
    projectId: "ecommerceztom",
    name: "EcommerceZtoM",
    storageBucket: "ecommerceztom.appspot.com",
    messagingSenderId: "745149943574",
    appId: "1:745149943574:web:5e4d9e56554d82c35f8a37"
  };
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) {
          return;
      }
        const userRef = firestore.doc(`users/${userAuth.uid}`); //Query Reference
        const snapShot = await userRef.get(); //Document Reference, getting snapshot (Document Snapshot)
        if (!snapShot.exists) {//Return true if document exists
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })

            }catch(ex){
                console.log("error",ex.message);
            }
        }
    return userRef;
  }

  export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch()
    objectsToAdd.forEach(object=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);

    });
    return await batch.commit();
  }

export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(
          doc => {
              const {title, items} = doc.data();
              return{
                  routeName: encodeURI(title.toLowerCase()),
                  id: doc.id,
                  title, 
                  items
              }
          }
      );
      return transformedCollection.reduce((accumulator,collection)=>{
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      },{});
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(userAuth=>{
              unsubscribe();
              resolve(userAuth);
          }, reject);
      })
  }

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;