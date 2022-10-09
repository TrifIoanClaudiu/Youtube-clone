
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAOSGs6IzUKbtzPblUI3FRuGzA2kZ-h2gY",
  authDomain: "yt-clone-83086.firebaseapp.com",
  projectId: "yt-clone-83086",
  storageBucket: "yt-clone-83086.appspot.com",
  messagingSenderId: "368612698027",
  appId: "1:368612698027:web:45ce1d22782a378b7fd4ee"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();


export default app;