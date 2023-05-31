<template>
    <v-container>
        <h2>Questions</h2>
        <ul>
            <li v-for="(question, index) in shuffledQuestions" :key="index">
                <p>{{ question.question }}</p>
                <button v-for="(option, optionIndex) in shuffledOptions(question)" :key="optionIndex"
                    @click="checkAnswer(option, question)"> {{ option }} </button>
            </li>
        </ul>
    </v-container>
</template>
  
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export default {
    name: 'Questions',
    layout: 'mainlayout',
    data() {
        return {
            questions: [],
            currentQuestionIndex: 0,
        }
    },
    async fetch() {
        await this.$store.dispatch('madyozw/getProducts');
    },
    computed: {
        shuffledQuestions() {
            return this.shuffleArray(this.questions)
        },
    },
    methods: {
        shuffledOptions(question) {
            const options = [question.option1, question.option2, question.option3, question.option4]
            return this.shuffleArray(options)
        },
        shuffleArray(array) {
            const shuffledArray = [...array]
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
            }
            return shuffledArray
        },
        checkAnswer(selectedOption, question) {
            if (selectedOption === question.option1) {
                console.log('Correct answer')
            } else {
                console.log('Incorrect answer')
            }
        },
    },
}
</script>
  