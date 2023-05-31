<template>
  <v-container>
    <v-row class="mt-5">
      <v-card>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-card-title>
            Edit Profile
          </v-card-title>
          <v-card-text>
            <v-text-field label="Name" outlined v-model="form.name" :rules="nameRule" />
            <v-text-field label="Surname" outlined v-model="form.surname" :rules="surnameRule" />
            <v-text-field label="Email" outlined type="email" v-model="form.email" :rules="emailRule" />
            <v-text-field label="Phone" outlined v-model="form.phone" :rules="phoneRule" />

          </v-card-text>
          <v-card-actions>
            <v-btn rounded class="error" @click="addPermModel = false">Cancel</v-btn>
            <v-spacer />
            <v-btn rounded class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>
  
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { mapGetters } from 'vuex'
export default {
  layout: 'mainlayout',
  data() {
    return {
      titleList: ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof'],
      genderList: ['F', 'M'],
      profileDialog: false,
      nameRule: [v => !!v || "Name is required"],
      surnameRule: [v => !!v || 'Surname is required'],
      emailRule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      phoneRule: [v => !!v || 'Phone is required'],
      valid: false,
      loading: false,
      form: {},
      //   form:{
      //       name:this.profile.name,
      //       surname:this.profile.surname,
      //       email:this.profile.email,
      //       phone:this.profile.phone
      //   }
    }
  }, methods: {
    submit() { }
  }
}
</script>
  
<style></style>