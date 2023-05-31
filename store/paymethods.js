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
      const collectionRef =firebase.firestore().collection('PaynowGateway');
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


           //adding streaming
  async addPaynow({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('PaynowGateway')
      .doc(payload.paymentgId)
      .set({
        "paymentgId":payload.paymentgId,
        "payname":payload.payname,
        "integrationId":payload.integrationId,
        "integrationKey":payload.integrationKey,
        "created_at":payload.created_at,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

    //Updating
    async updatePaynow({commit},payload){
      try {
        const addRef = await firebase.firestore().collection('PaynowGateway')
        .doc(payload.paymentgId)
        .update({
          "integrationId":payload.integrationId,
          "integrationKey":payload.integrationKey,
        })
        
      } catch (error) {
        console.log(error)
      }
    },

    async deletePaynow({commit},payload){
      const collectionRef =firebase.firestore().collection('PaynowGateway')
      .doc(payload.paymentgId);
      try {
        await collectionRef.delete().then((d)=>{
          console.log(d)
        })
        
      } catch (error) {
        console.log(error)
      }
    },

}