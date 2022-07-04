import React from "react";

import firebase from "firebase/app";
import firebaseConfig from "../firebase";

import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>please log in chat App</h1>
        <button
          onClick={() => firebaseConfig.signInWithRedirect( new firebase.auth.GoogleAuthProvider())}
          className={styles.btn}
        >
          log in
        </button>
        
      </div>
    </div>
  );
};

export default Login;
