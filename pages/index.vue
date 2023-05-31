<template>
  <v-container>
    <v-row class="mt-5">
      <v-col md="4" offset-md="4">
        <div class="d-flex justify-center">
          <img src="/img/logo.png" width="189" height="189"/>
        </div>
         <v-card class="mt-4">
                     <v-card-text>
                         <v-form v-model="valid" ref="form" lazy-validation>
                        <v-text-field
                              label="Username"
                              outlined
                              v-model="form.email"
                              :rules="emailRule"
                          />
                           <v-text-field
                              v-model="form.password"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[passwordrules.required, passwordrules.min]"
                              :type="show1 ? 'text' : 'password'"
                              name="input-10-1"
                              label="Password"
                              hint="At least 8 characters"
                              counter
                              outlined
                              @click:append="show1 = !show1"
                          />
                          <v-btn class="indigo darken-4 white--text mb-4"  large depressed block @click="submit" :loading="loading" :disabled="loading">Sign In</v-btn>
                         </v-form>
                         
  
                     </v-card-text>
                 </v-card>
      </v-col>
    </v-row>
  
    <v-snackbar
        absolute
        :color="color"
        right
        top
        v-model="snackbar"
      >{{text}}</v-snackbar>
  </v-container>
  
  
  </template>
  <script>
  
  
  
  export default {
   auth:false,
   data(){
       return{
          show1: false,
          snackbarText: 'No error message',
          form:{
          password: '',
          email:''
          },
          passwordrules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters'
          },
          emailRule:[v=>!!v || 'Required'],
          valid:false,
          loading:false,
          color:"",
          snackbar:false,
          text:""
       }
   },methods:{
      async submit(){
        let that = this
       
        if(this.$refs.form.validate()){
            this.valid = true
            this.loading=true
           // const response =  await this.$auth.loginWith('local', { data:this.form});
            this.$fire.auth.signInWithEmailAndPassword(this.form.email, this.form.password)
          
  
          .catch(function (error){
          that.text = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          $nuxt.$router.push('/')
        })
        }
        
        
      },
  
       forgotPassword() {
        let that = this
        this.$fire.auth.sendPasswordResetEmail(this.form.email)
        .then(function (){
          that.text = 'reset link sent to ' + that.form.email
          that.snackbar = true
        })
        .catch(function (error) {
          that.text = error.message
          that.snackbar = true
        })
      }
    }
  
  }
  </script>