// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(import.meta.env.VITE_apiKey)
console.log(import.meta.env.VITE_authDomain)
console.log(import.meta.env.VITE_projectId)
console.log(import.meta.env.VITE_storageBucket)
console.log(import.meta.env.VITE_messagingSenderId)
console.log(import.meta.env.VITE_appId)

const firebaseConfig = {
  apiKey: "AIzaSyAjgZ1-_Q5P-niG005Hr2Q3Ag_08ZM0qE4",
  authDomain: "chef-master-b155b.firebaseapp.com",
  projectId: "chef-master-b155b",
  storageBucket: "chef-master-b155b.appspot.com",
  messagingSenderId: "632390302724",
  appId: "1:632390302724:web:9a28c4860800e569024951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app