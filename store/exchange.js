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
      const collectionRef =firebase.firestore().collection('ExchangeRate');
      try {
        const allrates = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allrates.push(docData)
          
          console.log(allrates)
        })
        commit('setList',allrates)
      } catch (error) {
       console.log(error)
      }
    },

         //adding streaming
  async addTodayRate({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('ExchangeRate')
      .doc(payload.rtgsExchangeRateId)
      .set({
        "rtgsExchangeRateId":payload.rtgsExchangeRateId,
        "rtgsExchangeRate":payload.rtgsExchangeRate,
        "created_at":payload.created_at,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

    //Updating
    async updateTodayRate({commit},payload){
      try {
        const addRef = await firebase.firestore().collection('ExchangeRate')
        .doc(payload.rtgsExchangeRateId)
        .update({
          "rtgsExchangeRateId":payload.rtgsExchangeRateId,
          "rtgsExchangeRate":payload.rtgsExchangeRate,
        })
        
      } catch (error) {
        console.log(error)
      }
    },

    async deleteTodayRate({commit},payload){
      const collectionRef =firebase.firestore().collection('ExchangeRate')
      .doc(payload.exchageid);
      try {
        await collectionRef.delete().then((d)=>{
          console.log(d)
        })
        
      } catch (error) {
        console.log(error)
      }
    },


}