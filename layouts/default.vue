<template>


<v-app dark>

<v-app-bar
 light     
 app
 color="white"
 height="100px"
>  
  <v-toolbar-title> <img src="/img/logo.png"  width="90" class="pa-2"/></v-toolbar-title>
  <v-spacer />
  <div class="d-sm-none d-md-flex d-none d-sm-flex">
   
     
  <v-btn
      text
      x-large
      class="mr-2"
      to="/login"
    >
    LOGIN
    </v-btn>
     <v-btn
      text 
      x-large 
      to="/register"      
    >
   CREATE ACCOUNT
    </v-btn>
  </div>
</v-app-bar>  
<v-main>

    <Nuxt />

</v-main>  
 


<v-footer
dark
padless
>
<v-card
  flat
  tile
  width="100%"
  class="indigo lighten-1 white--text text-center"
>
  

  <v-divider></v-divider>

  <v-card-text class="white--text">
    {{ new Date().getFullYear() }} — <strong>Smileweekly</strong>
  </v-card-text>
</v-card>
</v-footer>

</v-app>
</template>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    }
  }
}
</script>