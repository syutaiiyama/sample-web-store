// Your web app's Firebase configuration
import firebase from "firebase";
import "firebase/auth";
import "firebase/functions";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    appId: process.env.FIREBASE_APP_ID,
  });
  console.log("firebase初期化完了");
}

// Authのみ使用
export const auth = firebase.auth();
