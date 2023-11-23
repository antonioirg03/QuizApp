<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const { quiz } = defineProps(["quiz"]);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToQuiz">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
/*Cards*/

.card {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-text {
  padding: 0 5px;
}

.card-text h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
</style>
