<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const router = useRouter();

// Get the id of the quiz from the url
const quizId = parseInt(route.params.id);

// Get the quiz from the quizes.json file according to the id
const quiz = quizes.find((q) => q.id === quizId);

// Variables currentQuestion and score are used to display the current question and the score
const currentQuestion = ref(0);

const score = ref(0);

// Update the score according to the answer, it will be used in the Question component
const updateScore = (answer) => {
  if (answer === true) {
    score.value++;
  }
};

// Variable completion is used to display the completion of the quiz for example: question 1 out of 5
const completion = ref(
  Math.floor(((currentQuestion.value + 1) / quiz.questions.length) * 100)
);

// Watch the currentQuestion variable to update the completion
watch(currentQuestion, () => {
  completion.value = Math.floor(
    ((currentQuestion.value + 1) / quiz.questions.length) * 100
  );
});

// Update the currentQuestion, it will be used in the Question component
const updateCurrentQuestion = () => {
  if (currentQuestion.value < quiz.questions.length - 1) {
    currentQuestion.value++;
  } else {
    // if we are on the last question, we will be redirected to the result page
    router.push(`/result/${score.value}/${quiz.questions.length}`);
  }
};
</script>

<template>
  <div>
    <QuizHeader
      :currentQuestion="currentQuestion"
      :totalQuestions="quiz.questions.length"
      :completion="completion"
    />
    <div>
      <Question
        :question="quiz.questions[currentQuestion]"
        @update="updateCurrentQuestion"
        @score="updateScore"
      />
    </div>
  </div>
</template>

<style scoped></style>
