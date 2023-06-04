// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSh1MIyb5v0001CeOSbHjxgGW2VGD6stQ",
  authDomain: "cadastro-ferramenta-app.firebaseapp.com",
  projectId: "cadastro-ferramenta-app",
  storageBucket: "cadastro-ferramenta-app.appspot.com",
  messagingSenderId: "27326504555",
  appId: "1:27326504555:web:27345c76c3d1acc46c1b2e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;