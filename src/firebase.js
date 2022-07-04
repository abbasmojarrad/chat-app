import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB-aRfC647YktHIuSUhYHCrJdAMqNQZKDk",
  authDomain: "chatgram-b4837.firebaseapp.com",
  projectId: "chatgram-b4837",
  storageBucket: "chatgram-b4837.appspot.com",
  messagingSenderId: "1087893175380",
  appId: "1:1087893175380:web:926e2fe4d1672f860f41c1",
  measurementId: "G-T68P2Y71XF",
}).auth();

export default firebaseConfig;
