<template>
    <v-app dark>

        <v-app-bar light app color="white" height="100px">
            <v-toolbar-title> <img src="/img/logo.png" width="90" class="pa-2" /></v-toolbar-title>
            <v-spacer />
            <div class="d-sm-none d-md-flex d-none d-sm-flex">

                <v-btn text x-large to="/books">
                    PLAY GAME
                </v-btn>
                <v-btn text x-large to="/register">
                    MEDIA
                </v-btn>
                <v-btn text x-large to="/register">
                    NEWS
                </v-btn>
                <v-btn text x-large class="mr-2" to="/login">
                    PAY BILLS
                </v-btn>

            </div>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="primary" dark v-bind="attrs" v-on="on">
                        Welcome: {{ displayFullname }}
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item router to="/profile">
                        <v-list-item-action>
                            <v-icon>mdi-account-cog</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>User Profile</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item router @click="$router.push('/logout')">
                        <v-list-item-action>
                            <v-icon>mdi-power</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main>

            <Nuxt />

        </v-main>



        <v-footer dark padless>
            <v-card flat tile width="100%" class="indigo lighten-1 white--text text-center">


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
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            drawer: true,
            offset: true,
            fixed: true,
            title: 'SMILEWEEKLY',
            overlay: false,
            displayFullname: ''
        }
    }, methods: {
        async logout() {
            await this.$auth.logout()
        },
        async fetch() {
            const collectionRef = firebase.firestore().collection('Users')
                .where('UserId', '==', $nuxt.$fire.auth.currentUser.uid);
            try {
                const snapshots = await collectionRef.get()
                snapshots.forEach(doc => {
                    this.displayFullname = doc.data().name
                });

                //commit('setProfiles',displayFullname)
            } catch (error) {
                console.log(error)
            }
        }


    },

    async mounted() {
        this.fetch()
        console.log(this.displayFullname)
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    }

}
</script>