import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjNIWqNFwjeLXCXRy15JIH5XRTmMOPnLk",
  authDomain: "tweet-clone-ae0f5.firebaseapp.com",
  projectId: "tweet-clone-ae0f5",
  storageBucket: "tweet-clone-ae0f5.appspot.com",
  messagingSenderId: "653693719904",
  appId: "1:653693719904:web:7d38267ab9ec81e87eba05",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
