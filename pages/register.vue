<template>
    <v-container>
        <v-row class="mt-2 mb-3 justify-content-center">
            <v-col md="6">
                <div class="d-flex justify-center">
                    <img src="/img/logo.png" width="189" height="189" />
                </div>
                <v-card>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-row>
                                <v-col md="6">
                                    <v-text-field label="Fullname" outlined v-model="form.name" />
                                </v-col>
                                <v-col md="6">
                                    <v-text-field label="Email Address" outlined v-model="form.email" :rules="emailRule" />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col md="6">
                                    <v-text-field label="Phone Number" outlined v-model="form.phone"
                                        :rules="phoneRule" /></v-col>
                                <v-col md="6">
                                    <v-text-field label="City/Town" outlined v-model="form.city"
                                        :rules="cityRule" /></v-col>
                            </v-row>
                            <v-row>
                                <v-col md="6">
                                    <v-select label="Selet Gender" outlined v-model="form.gender" :rules="genderRule"
                                        :items="items" item-text="name" item-value="id" /></v-col>
                                <v-col md="6">
                                    <v-text-field v-model="form.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[passwordrules.required, passwordrules.min]"
                                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
                                        hint="At least 8 characters" counter outlined
                                        @click:append="show1 = !show1" /></v-col></v-row>

                            <v-btn class="indigo darken-4 white--text mb-4" large depressed block @click="register"
                                :loading="loading" :disabled="loading">Create Account</v-btn>
                                <v-btn block class="text-none" @click="$router.push('/login')">
              sign in
            </v-btn>
                        </v-form>


                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar absolute :color="color" right top v-model="snackbar">{{ text }}</v-snackbar>
    </v-container>
</template>
<script>



export default {
    // auth: false,
    data() {
        return {
            show1: false,
            snackbarText: 'No error message',
            form: {
                name: '',
                phone: '',
                city: '',
                gender: '',
                email: '',
                password: ''
            },
            items: ['Male', 'Female'],
            passwordrules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters'
            },
            nameRule: [v => !!v || 'Fullname Required'],
            phoneRule: [v => !!v || 'Phone number Required'],
            cityRule: [v => !!v || 'City Required'],
            genderRule: [v => !!v || 'Please select gender'],
            emailRule: [v => !!v || 'Email Address Required'],
            valid: false,
            loading: false,
            color: "",
            snackbar: false,
            text: ""
        }
    }, methods: {
        async register() {
            if (
                this.name !== "" &&
                this.phone !== "" &&
                this.city !== "" &&
                this.gender !== "" &&
                this.email !== "" &&
                this.password !== ""
            ) {
                this.loading = true
                const createUser = await this.$fire.auth.createUserWithEmailAndPassword(this.form.email, this.form.password);
                const result = await createUser;
                console.log(result.user.uid)
                const dataBase = firebase.firestore().collection("Users").doc(result.user.uid);
                await dataBase.set({
                    name: this.form.name,
                    UserId: result.user.uid,
                    email: this.form.email,
                    phone_number: this.form.phone,
                    city: this.form.city,
                    gender: this.form.gender,
                    bio_info: "Not set",
                    role: "Admin",
                }).catch(function (error) {
                    this.text = error.message
                    that.snackbar = true
                }).then((user) => {
                    // $nuxt.$router.push('/users')
                    this.loading = false
                    this.text = "User has been add successfully!!"
                    this.color = "success"
                    this.snackbar = true
                })
            }
            this.snackbar = true
            this.text = "Please fill out all the fields!";
            return;
        },
    },




}
</script>