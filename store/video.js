import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const state =()=>({
    list:[],
    streamingvids:[],
})

export const mutations={
    setList(state,payload){
        state.list = payload
    },
    setStreamingvidsList(state,payload){
        state.streamingvids = payload
    },
    
}

export const actions={
  //adding
  async addVideo({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('smileweekly_videoLists')
      .doc(payload.videoId)
      .add({
        "videoId":payload.videoId,
        "videoTitle":payload.videoTitle,
        "videourl":payload.videourl,
        "created_at":payload.created_at,
        "playCount":payload.playCount,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

   //Updating
   async editVideo({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('smileweekly_videoLists')
      .doc(payload.videoId)
      .update({
        "videoTitle":payload.videoTitle,
        "videourl":payload.videourl,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

   async deleteVideo({commit},payload){
    const collectionRef =firebase.firestore().collection('smileweekly_videoLists');
    try {
      await collectionRef.doc(payload.videoid).delete().then((d)=>{
        console.log(d)
      })
      
    } catch (error) {
      console.log(error)
    }
  },
  //get videos
    async getList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_videoLists');
      try {
        const allvideoLists = []
        const snapshots = await collectionRef
        .orderBy("created_at", "desc")
        .get()  //created_at
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allvideoLists.push(docData)
          
          console.log(allvideoLists)
        })
        commit('setList',allvideoLists)
      } catch (error) {
       console.log(error)
      }
    },

    //LIVE STREAMING
    async getStreamingvidsList({commit},payload){
        const collectionRef =firebase.firestore().collection('smileweekly_broadcasting');
        try {
          const allbroadcastings = []
          const snapshots = await collectionRef
          .orderBy("created_at", "desc")
          .get()
          snapshots.forEach((doc) => {
            const docData = doc.data()
            allbroadcastings.push(docData)
            
            console.log(allbroadcastings)
          })
          commit('setStreamingvidsList',allbroadcastings)
        } catch (error) {
         console.log(error)
        }
      },

       //adding streaming
  async addStreamVideo({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('smileweekly_broadcasting')
      .doc(payload.videoId)
      .set({
        "videoId":payload.videoId,
        "videoTitle":payload.videoTitle,
        "videourl":payload.videourl,
        "created_at":payload.created_at,
        "isLive":payload.isLive,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

    //Updating
    async updateStreamVideo({commit},payload){
      try {
        const addRef = await firebase.firestore().collection('smileweekly_broadcasting')
        .doc(payload.videoId)
        .update({
          "videoTitle":payload.videoTitle,
          "videourl":payload.videourl,
        })
        
      } catch (error) {
        console.log(error)
      }
    },

    async deletestreamVideo({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_broadcasting')
      .doc(payload.videoid);
      try {
        await collectionRef.delete().then((d)=>{
          console.log(d)
        })
        
      } catch (error) {
        console.log(error)
      }
    },


/**
 *  add new VIDEO to server[firebase storage Google Cloud storage] param @videId collection name ['videoupload']
 */

   async addvideouploads({commit},payload){
    try {
      await firebase.firestore().collection('smileweekly_videouploads')
      .doc(payload.trackId)
      .set({
        "videoId":payload.videoId,
        "videoTitle":payload.videoTitle,
        "videourl":"not set",
        "created_at":payload.created_at,
        "playCount":payload.playCount,
      }).then((rsponse)=>{
        const storageRef =  firebase.storage().ref();
        const docRef =  storageRef.child(`smileweekly_videos/${payload.song_url.name}`);
        docRef.put(payload.song_url)
        .on(
        "state_changed",
        (snapshot) => {
        console.log(snapshot);
        },
        (err) => {
        console.log(err);
        this.loading = false;
        },
        async () => {
        const downloadURL = await docRef.getDownloadURL();
        try {
          await firebase.firestore().collection('smileweekly_videouploads')
          .doc(payload.trackId)
          .update({
            "videourl":downloadURL,
          })
          
        } catch (error) {
          console.log(error)
        }
        },
        )
      })
    } catch (error) {
      console.log(error)
    }
  },

     

}