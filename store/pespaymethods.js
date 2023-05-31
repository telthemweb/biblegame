import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


export const state =()=>({
    pesepaylist:[]
})

export const mutations={
    setPesepayList(state,payload){
        state.pesepaylist = payload
    }
}

export const actions={

 /**
 * --------------------------------------------------------------------------
 * 
 *           GET ALL PESEPAY
 * 
 * ----------------------------------------------------------------------------
 */
  async getPesepayList({commit},payload){
  const collectionRef =firebase.firestore().collection('PesepayGateway');
  try {
    const allpayy = []
    const snapshots = await collectionRef.get()
    snapshots.forEach((doc) => {
      const docData = doc.data()
      allpayy.push(docData)
      
      console.log(allpayy)
    })
    commit('setPesepayList',allpayy)
  } catch (error) {
   console.log(error)
  }
},

 /**
 * --------------------------------------------------------------------------
 * 
 *           ADD PESEPAY
 * 
 * ----------------------------------------------------------------------------
 */


  async addPesepay({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('PesepayGateway')
      .doc(payload.quizId)
      .set({
        "pesepayId":payload.pesepayId,
        "payname":payload.methodname,
        "integrationKey":payload.integrationKey,
        "encryptionkey":payload.encryptionkey,
        "created_at":payload.created_at,
      })
      
    } catch (error) {
      console.log(error)
    }
  },



/**
 * --------------------------------------------------------------------------
 * 
 *           UPDATE PESEPAY
 * 
 * ----------------------------------------------------------------------------
 */
  async updatePesepay({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('PesepayGateway')
      .doc(payload.pesepayId)
      .update({
        "integrationKey":payload.integrationKey,
        "encryptionkey":payload.encryptionkey,
      })
      
    } catch (error) {
      console.log(error)
    }
  },


/**
 * --------------------------------------------------------------------------
 * 
 *           DELETE PESEPAY
 * 
 * ----------------------------------------------------------------------------
 */
  async deletePesepay({commit},payload){
    const collectionRef =firebase.firestore().collection('PesepayGateway')
    .doc(payload.pesepayId);
    try {
      await collectionRef.delete().then((d)=>{
        console.log(d)
      })
      
    } catch (error) {
      console.log(error)
    }
  },




}