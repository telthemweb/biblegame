import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const actions = {
  async nuxtServerInit({ dispatch }, ctx) {
    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    /** Get the VERIFIED authUser on the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims
      )

      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },
    async onAuthStateChangedAction(state, { authUser, claims }) {
      if (!authUser) {
        // remove state
        state.commit('SET_USER', null)
  
        //redirect from here
        this.$router.push({
          path: '/login',
        })
      } else {
        const { uid, email, emailVerified, displayName, photoURL  } = authUser
       
      
        state.commit('SET_USER', {
          uid,
          email, emailVerified, displayName, photoURL 
        })
      }
    },

    async onAuthStateChanged({ commit }, { authUser }) {
      if (!authUser) {
        commit('RESET_STORE')
        return
      }
      if (authUser && authUser.getIdToken) {
        try {
          const idToken = await authUser.getIdToken(true)
          console.info('idToken', idToken)
        } catch (e) {
          console.error(e)
        }
      }
      commit('SET_USER', { authUser })
    },
  }
  
  const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
    RESET_STORE: (state) => {
      Object.assign(state, initialState())
    },
    setProfiles(state,payload){
      state.fullname = payload
    }
  }
  
  const state = () => ({
    user: null,
    fullname: null,
  })
  
  const getters = {
    getUser(state) {
      return state.user
    },

    async getProfile({commit},payload){
      const collectionRef =firebase.firestore().collection('Users');
      try {
        const displayFullname = "";
        const snapshots = await collectionRef.where('userId', '==', authUser.uid)
        .get()
        snapshots.forEach((doc) => {
          const docData = doc.data().name
          displayFullname.push(docData)
          console.log(docData)
        })
        commit('setProfiles',displayFullname)
      } catch (error) {
       console.log(error)
      }
    },
  }


  export default {
    state,
    actions,
    mutations,
    getters,
  }
  