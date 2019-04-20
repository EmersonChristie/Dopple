import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBk0mVTR7yAPV0404CMnDlK7Pkh82r_gt8",
  authDomain: "dopple-app-1.firebaseapp.com",
  databaseURL: "https://dopple-app-1.firebaseio.com",
  projectId: "dopple-app-1",
  storageBucket: "dopple-app-1.appspot.com",
  messagingSenderId: "744633343489"
};

firebase.initializeApp(config);

//google auth provider for logging in with Google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;

//firebase databse - firestore - realtime documnet store
// setting saves create_at timestamp as firestore time stamp
export const db = firebase.firestore();
//   .settings({ timestampsInSnapshots: true });

// import firebase from 'firebase';

// const config = {
// 	apiKey: "AIzaSyB38YX48apsUqlP_LDgs2YEKTHCcSigebU",
//     authDomain: "look-alike-app.firebaseapp.com",
//     databaseURL: "https://look-alike-app.firebaseio.com",
//     projectId: "look-alike-app",
//     storageBucket: "look-alike-app.appspot.com",
//     messagingSenderId: "1088569449268"
// };

// firebase.initializeApp(config);

// //google auth provider for logging in with Google
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const firebaseAuth = firebase.auth;

// //firebase databse - firestore - realtime documnet store
// // setting saves create_at timestamp as firestore time stamp
// export const db = firebase.firestore().settings({ timestampsInSnapshots: true });
