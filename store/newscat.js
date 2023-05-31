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
      const collectionRef =firebase.firestore().collection('smileweekly_NewsCategory');
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
  async addNews({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('NewsCategory')
      .doc(payload.newscatId)
      .set({
        "newscatId":payload.newscatId,
        "newsTitle":payload.newsTitle,
        "newsDesc":payload.newsDesc
      })
      
    } catch (error) {
      console.log(error)
    }
  },

    //Updating
    async updateNews({commit},payload){
      try {
        const addRef = await firebase.firestore().collection('NewsCategory')
        .doc(payload.newscatId)
        .update({
          "newsTitle":payload.newsTitle,
          "newsDesc":payload.newsDesc,
        })
        
      } catch (error) {
        console.log(error)
      }
    },

    async deleteNewsCategory({commit},payload){
      const collectionRef =firebase.firestore().collection('NewsCategory')
      .doc(payload.newscatId);
      try {
        await collectionRef.delete().then((d)=>{
          console.log(d)
        })
        
      } catch (error) {
        console.log(error)
      }
    },

/**
 * --------------------------------------------------------------------------
 * 
 *                           News In full details for certain Category
 * 
 * ----------------------------------------------------------------------------
 */

  //==========================================================================

  /**
   *  add new param @categoryid collection name ['NewsLists']
   */

   async addnewsItem({commit},payload){
    try {
      //FirebaseStorage.instance.ref().child("newsfiles").child(imagepath);
      const addRef = await firebase.firestore().collection('NewsLists')
      .doc(payload.newsId)
      .set({
        "newsId":payload.newsId,
        "catgoryid":payload.catgoryid,
        "newsheadline":payload.newsheadline,
        "description":payload.description,
        "featureimageurl":payload.featureimageurl,
        "readCount":payload.readCount,
        "created_at":payload.created_at,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

/**
   *  update new param @newsId collection name ['NewsLists']
   */


async updatenewsItem({commit},payload){
  try {
    const addRef = await firebase.firestore().collection('NewsLists')
    .doc(payload.newsId)
    .update({
      "newsheadline":payload.newsheadline,
      "description":payload.description,
    })
    
  } catch (error) {
    console.log(error)
  }
},


/**
   *  update new param @newsId collection name ['NewsLists']
   */

async deletenewsItem({commit},payload){
  const collectionRef =firebase.firestore().collection('NewsLists')
  .doc(payload.newsId);
  try {
    await collectionRef.delete().then((d)=>{
      console.log(d)
    })
    
  } catch (error) {
    console.log(error)
  }
},



}