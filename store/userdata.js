import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const state =()=>({
    list:[]
})

export const mutations={
    setList(state,payload){
        state.list = payload
    }
}

export const actions={
    async getList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Users');
      try {
        const allusers = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allusers.push(docData)
          
          console.log(allusers)
        })
        commit('setList',allusers)
      } catch (error) {
       console.log(error)
      }
    },

}