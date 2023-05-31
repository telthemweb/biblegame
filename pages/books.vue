<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text class="d-flex">
                        <v-btn text to="/dashboard">Dashboard</v-btn>
                        <v-btn text disabled>Books </v-btn> <v-spacer />
                        <v-btn><v-icon color="white">mdi-account-cog</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row  >
            <v-col cols="12" sm="4" v-for="(book, index) in quizies" :key="index">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="/img/logo.png" height="200px" cover></v-img>

                    <v-card-title>
                        {{ book.quizTitle }}
                    </v-card-title>

                    <v-card-actions>
                        {{ book.quizDesc }}
                        
                    </v-card-actions>

                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
</template>


<script>

export default {
    layout: 'mainlayout',
    data() {
        return {show: false,}
    },
    async fetch() {
        await this.$store.dispatch('quiz/getList');
    },
    computed: {


        quizies() {
            return this.$store.state.quiz.quizies;
        }
    },
    methods: {},
}
</script>
  