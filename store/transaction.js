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
      const collectionRef =firebase.firestore().collection('smileweekly_Transaction_for_trackTables');
      try {
        const allpayy = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allpayy.push(docData)
          
          console.log(allpayy)
        })
        commit('setList',allpayy)
      } catch (error) {
       console.log(error)
      }
    },

}