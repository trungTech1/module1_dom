import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyArggQw9VffjYrj1w2r6x0S8LyQAmLHbaA",
  authDomain: "module1-73462.firebaseapp.com",
  projectId: "module1-73462",
  storageBucket: "module1-73462.appspot.com",
  messagingSenderId: "661678122382",
  appId: "1:661678122382:web:84a6b519509d20fbd530df",
  measurementId: "G-ZRMK7ZEXZP",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}
