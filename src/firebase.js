import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBL6GWztvYEXrYG3-oNFBa55eon4uFdKY8",
  authDomain: "student-teacher-appointm-14086.firebaseapp.com",
  projectId: "student-teacher-appointm-14086",
  storageBucket: "student-teacher-appointm-14086.appspot.com",
  messagingSenderId: "181431425276",
  appId: "1:181431425276:web:f990c8d16803576df39f79",
  measurementId: "G-B0S8BXD7JX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
