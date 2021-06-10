// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD7QZ-EcRnY_a7AcYEN-kBoRImOUgSkfEU",
//   authDomain: "ecommerce-bf46f.firebaseapp.com",
//   projectId: "ecommerce-bf46f",
//   storageBucket: "ecommerce-bf46f.appspot.com",
//   messagingSenderId: "188422085069",
//   appId: "1:188422085069:web:35758c4eaa4bea20570c84",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";
// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7QZ-EcRnY_a7AcYEN-kBoRImOUgSkfEU",
  authDomain: "ecommerce-bf46f.firebaseapp.com",
  projectId: "ecommerce-bf46f",
  //   storageBucket: "ecommerce-bf46f.appspot.com",
  messagingSenderId: "188422085069",
  appId: "1:188422085069:web:35758c4eaa4bea20570c84",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
