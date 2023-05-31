import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const state =()=>({
    questions:[],
    questions1:[],
    questions2:[],
    questioncsvs:[]
})

export const mutations={

    setQuestion(state,payload){
      state.questions = payload
    },


    setQuestion1(state,payload){
      state.questions1 = payload
    },

    setQuestion2(state,payload){
      state.questions2 = payload
    },
  

    setQuestioncsv(state,payload){
      state.questioncsvs = payload
  }
}


export const actions={
/**
 * --------------------------------------------------------------------------
 * 
 *            ALL Questions
 * 
 * ----------------------------------------------------------------------------
 */
     
 async getList({commit},payload){
    const collectionRef =firebase.firestore().collection('Questions');
    try {
      const allquestions = []
      const snapshots = await collectionRef.get()
      snapshots.forEach((doc) => {
        const docData = doc.data()
        allquestions.push(docData)
      })
      commit('setQuestion',allquestions)
    } catch (error) {
     console.log(error)
    }
  },





   async getQuestion1({commit},payload){
    const collectionRef =firebase.firestore().collection('Questions1');
    try {
      const allquestions = []
      const snapshots = await collectionRef.get()
      snapshots.forEach((doc) => {
        const docData = doc.data()
        allquestions.push(docData)
      })
      commit('setQuestion1',allquestions)
    } catch (error) {
     console.log(error)
    }
  },




   async getQuestion2({commit},payload){
    const collectionRef =firebase.firestore().collection('Questions2');
    try {
      const allquestions = []
      const snapshots = await collectionRef.get()
      snapshots.forEach((doc) => {
        const docData = doc.data()
        allquestions.push(docData)
      })
      commit('setQuestion2',allquestions)
    } catch (error) {
     console.log(error)
    }
  },



/**
 * --------------------------------------------------------------------------
 * 
 *            Add Questions
 * 
 * ----------------------------------------------------------------------------
 */
  async addUssdQuestion({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions')
      .add({
        "answer":payload.answer,
        "answer_string":payload.answer_string,
        "question":payload.question,
        "question_number":payload.question_number
      })
      
    } catch (error) {
      console.log(error)
    }
  },



  /**
 * --------------------------------------------------------------------------
 * 
 *            Add Questions one
 * 
 * ----------------------------------------------------------------------------
 */
  async addUssdQuestionone({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions1')
      .add({
        "answer":payload.answer,
        "answer_string":payload.answer_string, //CORRECT ANSWER
        "question":payload.question,
        "question_number":payload.question_number
      })
      
    } catch (error) {
      console.log(error)
    }
  },



    /**
 * --------------------------------------------------------------------------
 * 
 *            Add Questions one
 * 
 * ----------------------------------------------------------------------------
 */
  async addUssdQuestiontwo({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions2')
      .add({
        "answer":payload.answer,
        "answer_string":payload.answer_string,
        "question":payload.question,
        "question_number":payload.question_number
      })
      
    } catch (error) {
      console.log(error)
    }
  },




























/**
 * --------------------------------------------------------------------------
 * 
 *            Update Questions
 * 
 * ----------------------------------------------------------------------------
 */
  async updateUssdQuestion({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions').doc()
      .update({
        "answer":payload.answer,
        "answer_string":payload.answer_string,
        "question":payload.question,
        "question_number":payload.question_number,
      })
      
    } catch (error) {
      console.log(error)
    }
  },


  /**
 * --------------------------------------------------------------------------
 * 
 *            Update Questions1
 * 
 * ----------------------------------------------------------------------------
 */
  async updateUssdQuestionone({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions1').doc()
      .update({
        "answer":payload.answer,
        "answer_string":payload.answer_string,
        "question":payload.question,
        "question_number":payload.question_number,
      })
      
    } catch (error) {
      console.log(error)
    }
  },





  /**
 * --------------------------------------------------------------------------
 * 
 *            Update Questions2
 * 
 * ----------------------------------------------------------------------------
 */
  async updateUssdQuestiontwo({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('Questions2').doc()
      .update({
        "answer":payload.answer,
        "answer_string":payload.answer_string,
        "question":payload.question,
        "question_number":payload.question_number,
      })
      
    } catch (error) {
      console.log(error)
    }
  },











}


