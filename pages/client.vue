<template>
<v-container>
  <v-row class="mt-5">
    <v-col md="4" offset-md="4">
      <div class="d-flex justify-center">
        <img src="/icon.png" width="200" height="200"/>
      </div>
       <v-card class="mt-4">
                   <v-card-text>
                       
                      <h2>Thank you for choosing smileweekly quiz challenge. Please download our mobile to enjoy more. Dont miss click this link</h2>
                       <v-btn block rounded color="primary" class="mt-1" to="/login">Download on Playstore</v-btn>
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
        show1: false
     }
 },

}
</script>