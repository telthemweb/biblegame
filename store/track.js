import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import "firebase/compat/storage";

export const state =()=>({
    list:[],
    artistname:null,
    albumName:null,
    albums:[],
    artists:[],
    albumtracks:[],
    profileDetails:[],
    downloadURL:''
})

export const mutations={
  setdownloadURL(state,payload){
      state.downloadURL = payload
  },

  setList(state,payload){
    state.list = payload
},

  setartistname(state,payload){
    state.artistname = payload
  },


  setalbumName(state,payload){
    state.albumName = payload
  },


  setArtistProfileDetails(state,payload){
    state.profileDetails = payload
  },


  setAlbumList(state,payload){
    state.albums = payload
  },


  setArtistsList(state,payload){
  state.artists = payload
  },


  setAlbumtrackList(state,payload){
  state.albumtracks = payload
  },
}

export const actions={

  /**
 * --------------------------------------------------------------------------
 * 
 *            ALBUMS
 * 
 * ----------------------------------------------------------------------------
 */



//GET TRACKS MIX
    async getList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_MusicTracks');
      try {
        const allrates = []
        let dsingerid = ''
        let dalbumid = ''
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          dsingerid=doc.data().singerid
          dalbumid=doc.data().albumid
          allrates.push(docData)
         
          //console.log(allrates)
        })
        commit('setList',allrates)
        commit('setartistname',dsingerid)
        commit('setalbumName',dalbumid)
      } catch (error) {
       console.log(error)
      }
    },




//GET ALL ALBUMS ADDED
    async getAlbumListt({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_MusicAlbums')
      .where('artistId', '==', payload)
      try {
        const allAlbumList = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allAlbumList.push(docData)
         console.log("albums  "+allAlbumList)
        })
        commit('setAlbumList',allAlbumList)
      } catch (error) {
       console.log(error)
      }
    },



/**
 *  add Album belongs to  @artistId collection name ['MusicAlbums']
 */

 async add_Album_Belong_To_Artist({commit},payload){
  try {
    //FirebaseStorage.instance.ref().child("albumsCovers").child(imagepath);
    await firebase.firestore().collection('smileweekly_MusicAlbums')
    .doc(payload.albumId)
    .set({
      "albumId":payload.albumId,
      "albumTitle":payload.albumTitle,
      "cover":"Not set",
      "artistId":payload.artistId,
      "price":payload.price,
      "created_at":payload.created_at,
      "type":payload.type,
    }).then((response)=>{
      const storageRef =  firebase.storage().ref();
    const docRef =  storageRef.child(`smileweekly_albumcovers/${payload.cover.name}`);
    docRef.put(payload.cover)
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
         await firebase.firestore().collection('smileweekly_MusicAlbums')
          .doc(payload.albumId)
          .update({
            "cover":downloadURL,
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






/**
 *  update  param @albumId collection name ['MusicAlbums']
 */

 async update_Album_Belong_To_Artist({commit},payload){
  try {
    const addRef = await firebase.firestore().collection('smileweekly_MusicAlbums')
      .doc(payload.albumId)
      .update({
        "albumTitle":payload.albumTitle,
        "price":payload.price,
        "type":payload.type,
      })

  } catch (error) {
    console.log(error)
  }
},




/**
 *  Delete new param @artistId collection name ['MusicAlbums']
 */

 async delete_Album_Belong_To_Artist({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_MusicAlbums')
  .doc(payload.albumId);
  try {
    await firebase.storage().refFromURL(payload.cover).delete();
    await collectionRef.delete().then((d)=>{
      console.log(d)
    })
    
  } catch (error) {
    console.log(error)
  }
},




//***************************************End************************************************* */













/**
 * --------------------------------------------------------------------------
 * 
 *            ARTIST REGISTRATION
 * 
 * ----------------------------------------------------------------------------
 */


 //get  All Artists
    async getArtistsList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Artists');
      try {
        const allArtists = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allArtists.push(docData)
         console.log("Artists  "+ allArtists)
        })
        commit('setArtistsList',allArtists)
      } catch (error) {
       console.log(error)
      }
    },







/**
 *  add artist param @artistId collection name ['Artists']
 */


 async addArtist({commit},payload){
  try {
    await firebase.firestore().collection('smileweekly_Artists')
      .doc(payload.artistId)
      .set({
        "artistId":payload.artistId,
        "name":payload.name,
        "email":payload.email,
        "gender":payload.gender,
        "img_url":"not set",
        "isActive":payload.isActive,
        "created_at":payload.created_at,
      }).then((response)=>{
        const storageRef =  firebase.storage().ref();
    const docRef =  storageRef.child(`smileweekly_artistfiles/${payload.img_url.name}`);
    docRef.put(payload.img_url)
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
        await firebase.firestore().collection('smileweekly_Artists')
        .doc(payload.artistId)
        .update({
          "img_url":downloadURL,
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







/**
 *  update new param @artistId collection name ['Artists']
 */

 async updateArtist({commit},payload){
  try {
    const addRef = await firebase.firestore().collection('smileweekly_Artists')
    .doc(payload.artistId)
    .update({
      "name":payload.name,
      "email":payload.email,
      "gender":payload.gender,
    })
    
  } catch (error) {
    console.log(error)
  }
},






/**
 *  get by id new param @artistId collection name ['Artists']
 */

 async getArtistProfileDetails({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_Artists')
  .doc(payload);
  try {
    const artistprofiles = []
    const snapshots = await collectionRef.get()
    snapshots.forEach((doc) => {
      const docData = doc.data()
      artistprofiles.push(docData)
     console.log("Artist info  "+ artistprofiles)
    })
    commit('setArtistProfileDetails',artistprofiles)
  } catch (error) {
   console.log(error)
  }
},






/**
 *  Delete new param @artistId collection name ['Artists']
 */

 async deleteArtist({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_Artists')
  .doc(payload.artistId);
  try {
    // await firebase.storage().ref().fullPath(payload.img_url).delete();
    await firebase.storage().refFromURL(payload.img_url).delete();
    await collectionRef.delete().then((d)=>{
      console.log(d)
     
    })
    
  } catch (error) {
    console.log(error)
  }
},



//********************************End***************************************************************** */






















 /**
 * --------------------------------------------------------------------------
 * 
 *            ALBUM TRACKS UPLOADINGS
 * 
 * ----------------------------------------------------------------------------
 */




    //get album tracks
    async getAlbumtrackList({commit},payload){
      console.log("data=> "+payload)
      const collectionRef =firebase.firestore().collection('smileweekly_MusicTracks')
      .where('albumid', '==', payload);
      try {
        const allalbumtracks = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allalbumtracks.push(docData)
         console.log(doc.data())
        })
        commit('setAlbumtrackList',allalbumtracks)
      } catch (error) {
       console.log(error)
      }
    },

   

  //==========================================================================

/**
 *  add new param @trackId, @albumid,@singerid collection name ['MusicTracks']
 */

   async addAlbumtrack({commit},payload){
    try {
      await firebase.firestore().collection('smileweekly_MusicTracks')
      .doc(payload.trackId)
      .set({
        "trackId":payload.trackId,
        "trackTitle":payload.trackTitle,
        "singerid":payload.singerid,
        "song_price":payload.song_price,
        "song_url":"not set",
        "albumid":payload.albumid,
        "dounloadCount":payload.dounloadCount,
        "created_at":payload.created_at,
        "type":payload.type,
      }).then((rsponse)=>{
        const storageRef =  firebase.storage().ref();
        const docRef =  storageRef.child(`smileweekly_sounds/${payload.song_url.name}`);
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
          await firebase.firestore().collection('smileweekly_MusicTracks')
          .doc(payload.trackId)
          .update({
            "song_url":downloadURL,
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

/**
 *  update new param @newsId collection name ['NewsLists']
 */


async updateAlbumtrack({commit},payload){
  try {
    const addRef = await firebase.firestore().collection('smileweekly_MusicTracks')
    .doc(payload.trackId)
    .update({
      "trackTitle":payload.trackTitle,
      "song_price":payload.song_price,
      "type":payload.type,
    })
    
  } catch (error) {
    console.log(error)
  }
},


/**
 *  Delete new param @newsId collection name ['NewsLists']
 */

async deleteAlbumtrack({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_MusicTracks')
  .doc(payload.trackId);
  try {
    await collectionRef.delete().then((d)=>{
      console.log(d)
    })
    
  } catch (error) {
    console.log(error)
  }
},
//********************************End***************************************************************** */


}