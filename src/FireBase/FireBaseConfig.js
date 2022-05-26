
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOdLYN39dvr-1TXizhjMsA7Tl5hVo2AwQ",
  authDomain: "contemporary-dbc54.firebaseapp.com",
  projectId: "contemporary-dbc54",
  storageBucket: "contemporary-dbc54.appspot.com",
  messagingSenderId: "872772686846",
  appId: "1:872772686846:web:9462ba891371032af8e6af",
  measurementId: "G-LKNMLDRSKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default FireBaseConfig