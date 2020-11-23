import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAb9UlJHKZQkqFaA3vJ25mgqsIOIl1CEQY",
    authDomain: "ecommerceztom.firebaseapp.com",
    databaseURL: "https://ecommerceztom.firebaseio.com",
    projectId: "ecommerceztom",
    storageBucket: "ecommerceztom.appspot.com",
    messagingSenderId: "745149943574",
    appId: "1:745149943574:web:5e4d9e56554d82c35f8a37"
  };
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) {
          //console.log(userAuth, "Sin valor");
          return;
      }
        const userReft = firestore.doc(`users/${userAuth.uid}`);
        const userSnapShot = await userReft.get();
        console.log(userSnapShot);
        if(!userSnapShot){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await userReft.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })

            }catch(ex){
                console.log("error",ex.message);
            }
        }
    return userReft;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;