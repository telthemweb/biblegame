import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyDgKraaNeGgKKSg9EMA1Mwcl0sOzI--XvQ",
        authDomain: "projectx-ussd-game.firebaseapp.com",
        projectId: "projectx-ussd-game",
        storageBucket: "projectx-ussd-game.appspot.com",
        messagingSenderId: "971406964195",
        appId: "1:971406964195:web:6c9636dd09bd4642875cd6",
        measurementId: "G-52C1Z9ZK8L"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true,merge: true,})
}
const fireDb = firebase.app().firestore()
export {fireDb}


