import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyDwwk_TFeNLQA8zqmTGVirYXTUp6dLbmlk",
    authDomain: "whatsapp-clone-9d156.firebaseapp.com",
    projectId: "whatsapp-clone-9d156",
    storageBucket: "whatsapp-clone-9d156.appspot.com",
    messagingSenderId: "32890741586",
    appId: "1:32890741586:web:c727b924d76b91014dd08b"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}

