// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";
// firebase config
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBoDRBLoJ3QTiJXqnjkecD9rbLL5AYJeiM",
  authDomain: "ecommerce-e5776.firebaseapp.com",
  projectId: "ecommerce-e5776",
  storageBucket: "ecommerce-e5776.appspot.com",
  messagingSenderId: "179328032655",
  appId: "1:179328032655:web:739dcde51854ccb8c675fa"
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


