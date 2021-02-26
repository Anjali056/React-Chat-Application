import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnVF92R82HpSM__v1RwEJLX3ZDZZ0S2XE",
  authDomain: "firstapp-efa58.firebaseapp.com",
  projectId: "firstapp-efa58",
  storageBucket: "firstapp-efa58.appspot.com",
  messagingSenderId: "816643103063",
  appId: "1:816643103063:web:8350b4df394864d0ae0612"
};

const app = firebase.initializeApp(firebaseConfig);//to connect
const database=app.firestore();//acces to database

export default database;//allow u to use database out of this file and can import in different file