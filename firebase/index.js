import firebase from "firebase/app";
import "@firebase/database";
import "@firebase/auth";

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp({
    apiKey: "AIzaSyDLtej5xu1ibelpV3GnGTtwcL3hRcSa7O8",
    authDomain: "changofree20.firebaseapp.com",
    databaseURL: "https://changofree20.firebaseio.com",
    projectId: "changofree20",
    storageBucket: "changofree20.appspot.com",
    messagingSenderId: "363439510457",
    appId: "1:363439510457:web:72b3c7c91e0220d92d5c68",
    measurementId: "G-CMXHEGQWH3",
  });
} else {
  app = firebase.app();
}
export const getFirebase = () => {
  return app;
};

export const getFirebaseRB = () => {
  return firebase.database(app);
};

export const authAnonymus = () => {
  return new Promise((resolve) => {
    firebase.auth().signInAnonymously().then(e => {
        resolve(e);
    })
  });
};
