import {initializeApp} from "firebase/app"
import { GoogleAuthProvider, getAuth, GithubAuthProvider  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAw5jA36tffQI5OHoGhHLyKVNTO-7q1sW4",
    authDomain: "credential-implementation.firebaseapp.com",
    projectId: "credential-implementation",
    storageBucket: "credential-implementation.appspot.com",
    messagingSenderId: "448766531566",
    appId: "1:448766531566:web:c682da3506431f14e960ff"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export { auth, googleProvider, githubProvider};
