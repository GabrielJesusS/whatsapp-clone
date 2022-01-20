import {initializeApp, getApps, getApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyDwwk_TFeNLQA8zqmTGVirYXTUp6dLbmlk",
    authDomain: "whatsapp-clone-9d156.firebaseapp.com",
    projectId: "whatsapp-clone-9d156",
    storageBucket: "whatsapp-clone-9d156.appspot.com",
    messagingSenderId: "32890741586",
    appId: "1:32890741586:web:c727b924d76b91014dd08b"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}

