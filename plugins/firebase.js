import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyDgKraaNeGgKKSg9EMA1Mwcl0sOzI--XvQ",
        authDomain: "projectx-ussd-game.firebaseapp.com",
        projectId: "projectx-ussd-game",
        storageBucket: "projectx-ussd-game.appspot.com",
        messagingSenderId: "971406964195",
        appId: "1:971406964195:web:81d1eaade7bc3727875cd6",
        measurementId: "G-W4WTTLJ0C9"
        //databaseURL: "https://projectx-ussd-game.firebaseio.com",
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true,merge: true,})
}
const fireDb = firebase.app().firestore()
export {fireDb}


