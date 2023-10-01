import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPZHA7OW9qIvrCNb5_X4MwAiuxBtDTwL8",
  authDomain: "mypocketpay-76f35.firebaseapp.com",
  projectId: "mypocketpay-76f35",
  storageBucket: "mypocketpay-76f35.appspot.com",
  messagingSenderId: "437879801495",
  appId: "1:437879801495:web:b01a4a85477505034b0bd2",
  measurementId: "G-YM55HKPZ3Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
