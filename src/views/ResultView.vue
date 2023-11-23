<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const router = useRouter();

// Variables score and total are passed from the QuizView component as parameters to the url
const score = route.params.score;
const total = route.params.total;

// Variables grade and color are used to display the grade and the color of the grade
const grade = ref("");

const color = ref("");

// Calculate the percentage of the score
const percentage = Math.floor((score / total) * 100);

// Assign the grade and the color according to the percentage
if (percentage >= 90) {
  grade.value = "S";
  color.value = "#00CC00";
} else if (percentage >= 75) {
  grade.value = "A";
  color.value = "#00FF00";
} else if (percentage >= 60) {
  grade.value = "B";
  color.value = "#FFFF00";
} else if (percentage >= 45) {
  grade.value = "C";
  color.value = "#FF7F00";
} else {
  grade.value = "F";
  color.value = "#FF0000";
}

// Handle the click on the button, it will return to the home page
const handleButtonClick = () => {
  router.push("/");
};
</script>

<template>
  <div class="result-container">
    <p class="felicitations-text">Félicitations</p>
    <div class="grade-container" :style="{ backgroundColor: color }">
      <p class="grade">
        {{ grade }}
      </p>
    </div>
    <p class="score">{{ score }} / {{ total }}</p>
    <button class="btn-return" @click="handleButtonClick">Retour Quizes</button>
  </div>
</template>

<style scoped>
.result-container {
  /* margin-top: 30px;
  margin-bottom: 30px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.grade-container {
  /* padding: 20px; */
  width: 150px;
  height: 150px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: jump 1s infinite;
}

.grade {
  font-size: 5rem;
  font-weight: bold;
  /* animation: jump 1s infinite; */
  /* color: white; */
}

.score {
  font-size: 2rem;
  font-weight: bold;
}

.felicitations-text {
  font-size: 3rem;
  font-weight: bold;
}

.btn-return {
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.5rem;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.btn-return:hover {
  background-color: #ff8c00;
  color: white;
}
</style>
