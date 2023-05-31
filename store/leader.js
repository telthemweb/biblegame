import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const state =()=>({
    list:[],
    easylist:[],
    cracklist:[],
    granitelist:[],
    profileFullName: '',
    

})

export const mutations={
    setList(state,payload){
        state.list = payload
    },
    easyList(state,payload){
        state.easylist = payload
    },
    crackList(state,payload){
        state.cracklist = payload
    },
    graniteList(state,payload){
        state.granitelist = payload
    },
    
    setFullname(state,payload){
      state.profileFullName = payload
  }
}

export const actions={




   /**
   * --------------------------------------------------------------------------
   * 
   *        QUIZ GAME WINNERS  - ALL ACTIVITES
   * 
   * ----------------------------------------------------------------------------
   */

    async getList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Scores');
      try {
        const allrates = []
        let dname = ''
        const snapshots = await collectionRef.where('created_at', '==', Date.now())
        .orderBy("scoreNumber", "desc")
        .get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          dname =doc.data().userid
          allrates.push(docData)
        })
        commit('setList',allrates)
        commit('setFullname',dname)
        
      } catch (error) {
       console.log(error)
      }
    },
  
  /**
   * --------------------------------------------------------------------------
   * 
   *        QUIZ GAME WINNERS  - EASY GOING LEVEL
   * 
   * ----------------------------------------------------------------------------
   */

    async getEasyGoingList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Scores');
      try {
        const allrates = []
        let dname = ''
        const snapshots = await collectionRef.where('level', '==', '1')
        .orderBy("scoreNumber", "desc")
        .get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          dname =doc.data().userid
          allrates.push(docData)
        })
        commit('easyList',allrates)
        commit('setFullname',dname)
        
      } catch (error) {
       console.log(error)
      }
    },


  /**
   * --------------------------------------------------------------------------
   * 
   *        QUIZ GAME WINNERS  - CRACK LEVEL
   * 
   * ----------------------------------------------------------------------------
   */
    async getCrackLevelList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Scores');
      try {
        const allrates = []
        let dname = ''
        const snapshots = await collectionRef.where('level', '==', '2')
        .orderBy("scoreNumber", "desc")
        .get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          dname =doc.data().userid
          allrates.push(docData)
        })
        commit('crackList',allrates)
        commit('setFullname',dname)
        
      } catch (error) {
       console.log(error)
      }
    },

 
  /**
   * --------------------------------------------------------------------------
   * 
   *        QUIZ GAME WINNERS  - GRANITE LEVEL
   * 
   * ----------------------------------------------------------------------------
   */

    async getGraniteList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Scores');
      try {
        const allrates = []
        let dname = ''
        const snapshots = await collectionRef.where('level', '==', '3')
        .orderBy("scoreNumber", "desc")
        .get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          dname =doc.data().userid
          allrates.push(docData)
        })
        commit('graniteList',allrates)
        commit('setFullname',dname)
        
      } catch (error) {
       console.log(error)
      }
    },
   

}