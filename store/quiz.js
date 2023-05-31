import  firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const state =()=>({
    quizies:[],
    questions:[],
    questioncsvs:[]
})

export const mutations={
    setList(state,payload){
        state.quizies = payload
    },

    setQuestion(state,payload){
      state.questions = payload
  },
  

    setQuestioncsv(state,payload){
      state.questioncsvs = payload
  }
}

export const actions={


/**
 * --------------------------------------------------------------------------
 * 
 *            ALL BOOKS
 * 
 * ----------------------------------------------------------------------------
 */

//GET BOOKS CATEGORY
    async getList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_Quiz');
      try {
        const allquizs = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allquizs.push(docData)
          
          
        })
        commit('setList',allquizs)
        console.log(allquizs)
      } catch (error) {
       console.log(error)
      }
    },


/**
 *  add new param @quizId collection name ['Quiz']
 */

   async addQuizItem({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('smileweekly_Quiz')
      .doc(payload.quizId)
      .set({
        "quizId":payload.quizId,
        "quizTitle":payload.quizTitle,
        "quizDesc":payload.quizDesc,
        "created_at":payload.created_at,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

/**
 *  update new param @quizId collection name ['Quiz']
 */


async updateQuizItem({commit},payload){
  try {
     await firebase.firestore().collection('smileweekly_Quiz')
    .doc(payload.quizId)
    .update({
      "quizTitle":payload.quizTitle,
      "quizDesc":payload.quizDesc,
    })
    
  } catch (error) {
    console.log(error)
  }
},


/**
 *  update new param @newsId collection name ['Quiz']
 */

async deleteQuizItem({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_Quiz')
  .doc(payload.quizId);
  try {
    await collectionRef.delete().then((d)=>{
      console.log(d)
    })
    
  } catch (error) {
    console.log(error)
  }
},



    //*************************************End******************************************* */




/**
 * --------------------------------------------------------------------------
 * 
 *            ALL QUIZ QUESTIONS GAME
 * 
 * ----------------------------------------------------------------------------
 */

//GET
    async get_newVer_QuestionetList({commit},payload){
      const collectionRef =firebase.firestore().collection('smileweekly_QuizQuestions')
      .where('quizId','==',payload);
      try {
        const allquestion = []
        const snapshots = await collectionRef.get()
        snapshots.forEach((doc) => {
          const docData = doc.data()
          allquestion.push(docData)
        })
        commit('setQuestion',allquestion)
        
      } catch (error) {
       console.log(error)
      }
    },




    
/**
 *  add new param @quizId @qnid collection name ['QuizQuestions']
 */

   async addQuizQuestion({commit},payload){
    try {
      const addRef = await firebase.firestore().collection('smileweekly_QuizQuestions')
      .doc(payload.qnid)
      .set({
        "qnid":payload.qnid,
        "quizId":payload.quizId,
        "question":payload.question,
        "option1":payload.option1, //CORRECT ANSWER
        "option2":payload.option2,
        "option3":payload.option3,
        "option4":payload.option4,
        "quizlevel":payload.quizlevel,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

/**
 *  update new param @qnid collection name ['QuizQuestions']
 */


async updateQuizQuestion({commit},payload){
  try {
     await firebase.firestore().collection('smileweekly_QuizQuestions')
    .doc(payload.qnid)
    .update({
      "question":payload.question,
        "option1":payload.option1, //CORRECT ANSWER
        "option2":payload.option2,
        "option3":payload.option3,
        "option4":payload.option4,
        "quizlevel":payload.quizlevel,
    })
    
  } catch (error) {
    console.log(error)
  }
},


/**
 *  delete new param @newsId collection name ['QuizQuestions']
 */

async deleteQuizQuestion({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_QuizQuestions')
  .doc(payload.qnid);
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
 *       UPLOAD CSV FILE
 * 
 * ----------------------------------------------------------------------------
 */


//setQuestioncsv

 async getQuestioncsv({commit},payload){
  //  console.log(payload.quizId)
  const collectionRef =firebase.firestore().collection('smileweekly_questionUploads');
  
  try {
    const allquestioncsv = []
    const snapshots = await collectionRef
    // .where('quizId','==',payload.quizId)
  .orderBy('created_at','desc')
    .get()
    snapshots.forEach((doc) => {
      const docData = doc.data()
      allquestioncsv.push(docData)
    })
    commit('setQuestioncsv',allquestioncsv)
  } catch (error) {
   console.log(error)
  }
},

/**
 *  add new param @trackId, @albumid,@singerid collection name ['MusicTracks']
 */

 async uploadQuestionscsv({commit},payload){
   const storageRef =  firebase.storage().ref();
   const docRef =  storageRef.child(`smileweekly_questionUploadfiles/${payload.fileupload.name}`);
  try {
    await firebase.firestore().collection('smileweekly_questionUploads')
    .doc(payload.qnuploadid)
    .set({
      "qnuploadid":payload.qnuploadid,
      "quizId":payload.quizId,
      "bookTitle":payload.bookTitle,
      "questions_csv_url":"not set",
      "created_at":payload.created_at,
      "status":'Pending',
    }).then((rsponse)=>{
     
      docRef.put(payload.fileupload)
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
        await firebase.firestore().collection('smileweekly_questionUploads')
        .doc(payload.qnuploadid)
        .update({
          "questions_csv_url":downloadURL,
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
 *  add quiz using csv
 */

 async addQuizQuestion_using_csv({commit},payload){
  try {
    
      // postqn.forEach(element => {
         
      // });
      //  console.log("Payload  "+payload)
       for (let i in payload) {
        await firebase.firestore().collection('smileweekly_QuizQuestions')
        .doc(payload[i].qnid)
        .set({
              "qnid":payload[i].qnid,
              "quizId":payload[i].quizId,
              "question":payload[i].question,
              "option1":payload[i].option1, //CORRECT ANSWER
              "option2":payload[i].option2,
              "option3":payload[i].option3,
              "option4":payload[i].option4,
              "quizlevel":payload[i].quizlevel,
        })
      }
  } catch (error) {
    console.log(error)
  }
},






    //*************************************End******************************************* */

























/**
 * --------------------------------------------------------------------------
 * 
 *       DANGER ZONE :: THIS CODE IS NO LONGER NEEDED  MAAINTAIN THE ABOVE CODE
 * 
 * ----------------------------------------------------------------------------
 */













/**
 * --------------------------------------------------------------------------
 * 
 *        OLD VERSION OF ADDING QUIZ:: DEPRECIATING(VERSION):    ALL QUIZ QUESTIONS GAME
 * 
 * ----------------------------------------------------------------------------
 */

//GET
async getQuestionetList({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_Quiz')
  .doc(payload).collection("smileweekly_QNA");
  try {
    const allquestion = []
    const snapshots = await collectionRef.get()
    snapshots.forEach((doc) => {
      const docData = doc.data()
      allquestion.push(docData)
    })
    commit('setQuestion',allquestion)
    
  } catch (error) {
   console.log(error)
  }
},

/**
 *  add new param @quizId @qnid collection name ['Quiz']
 *  Abandoned code
 */

   async addQuizQuestion_OLDWAY({commit},payload){
    try {
      await firebase.firestore().collection('smileweekly_Quiz')
      .doc(payload.quizId)
      .collection("smileweekly_QNA")
      .add({
        "qnid":payload.qnid,
        "question":payload.question,
        "option1":payload.option1, //CORRECT ANSWER
        "option2":payload.option2,
        "option3":payload.option3,
        "option4":payload.option4,
        "quizlevel":payload.quizlevel,
      })
      
    } catch (error) {
      console.log(error)
    }
  },

/**
 *  delete new param @newsId collection name ['Quiz']
 * Abandoned code::: IF you delete category then you will also delete questions attached to it
 * and also you cant delete and update certain queestion within the category quetions ....
 * you need to delete whole category then start again or you can go to firebase and do changes of which is time consuming.....
 * 
 */

 async deleteQuizQuestion({commit},payload){
  const collectionRef =firebase.firestore().collection('smileweekly_Quiz')
  .doc(payload.quizId);
  try {
    await collectionRef.delete().then((d)=>{
      console.log(d)
    })
    
  } catch (error) {
    console.log(error)
  }

  
},
async addQuizQuestion_using_csv_with_old_way({commit},payload){
  try {
       for (let i in payload) {
        await firebase.firestore().collection('smileweekly_Quiz')
        .doc(payload[i].quizId)
      .collection("smileweekly_QNA")
      .add({
          "qnid":payload[i].qnid,
          "quizId":payload[i].quizId,
          "question":payload[i].question,
          "option1":payload[i].option1, //CORRECT ANSWER
          "option2":payload[i].option2,
          "option3":payload[i].option3,
          "option4":payload[i].option4,
          "quizlevel":payload[i].quizlevel,
        })
      }
  } catch (error) {
    console.log(error)
  }
}

























}