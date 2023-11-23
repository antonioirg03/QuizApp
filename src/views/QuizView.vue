<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const router = useRouter();

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestion = ref(0);

const score = ref(0);

const updateScore = (answer) => {
  console.log(answer);
  if (answer === true) {
    score.value++;
  }
};

const completion = ref(
  Math.floor(((currentQuestion.value + 1) / quiz.questions.length) * 100)
);

watch(currentQuestion, () => {
  completion.value = Math.floor(
    ((currentQuestion.value + 1) / quiz.questions.length) * 100
  );
  console.log(completion.value);
  console.log("Score", score.value);
});

const updateCurrentQuestion = () => {
  if (currentQuestion.value < quiz.questions.length - 1) {
    currentQuestion.value++;
  } else {
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
