<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="/">Dashboard</v-btn>
                       <v-btn text disabled>PAY ALL BILLS</v-btn> <v-spacer/>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-row class="mt-5">
         <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
              <v-row class="mb-4">
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2 float-right" elevation="0">
                          <v-icon color="white">mdi-wallet</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        BUY AIRTIME
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{hover }" open-delay="200">
            <v-card color="pink darken-1" :elevation="hover ? 16 : 2">
              <v-row class="mb-4">
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="pink lighten-2 float-right" elevation="0">
                          <v-icon color="white">mdi-account-cog</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                       PAY DISTV
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                   
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
         <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="orange darken-1" :elevation="hover ? 16 :2">
              <v-row class="mb-4">
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="orange lighten-2 float-right" elevation="0">
                          <v-icon color="white">mdi-home</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        PAY SCHOOL FEES
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
       <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </v-container>
  </template>
  
  <script>
  
  export default {
  layout:'mainlayout',
  data(){
    return{
        overlay:false,
    }
  },
  
  
  }
  </script>
  
  <style>
  
  </style>
  
  
  
  