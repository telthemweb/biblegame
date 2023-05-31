import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export default function ({app, route, redirect}){
    if (route.path !== '/login') {
      //we are on a protected route
      if(!app.$fire.auth.currentUser) {
        //take them to sign in page
        return redirect('/login')
      }
    } else if (route.path === '/login') {
      if(!app.$fire.auth.currentUser) {
        // return redirect('/register')
      } else {
        //check if the user is admin
        let userid =app.$fire.auth.currentUser.uid
        let role = "";
        const collectionRef =firebase.firestore().collection('Users');
      try {
        
        const snapshots =  collectionRef.where('userId', '==', userid)
        .get()
        snapshots.forEach((doc) => {
         role = doc.data().role
        })
      } catch (error) {
       console.log(error)
      }
        if(role=="User"){
          return redirect('/')
        }
      }
    }
    
  }
  