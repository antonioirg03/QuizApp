<script setup>
import { defineProps, defineEmits } from "vue";
const { question } = defineProps(["question"]);
const emit = defineEmits(["update", "score"]);

const updateScore = (answer) => {
  emit("score", answer);
  emit("update");
};
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="() => updateScore(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 30px;
  margin-bottom: 30px;
}

.question {
  font-size: 1.8rem;
  font-weight: bold;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
}

.option {
  display: flex;
  gap: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  width: 300px;
  padding: 10px 10px 10px 15px;
  cursor: pointer;
}

.option:hover {
  /* transition-delay: 50ms; */
  transition-duration: 400ms;
  background-color: #ff8c00;
  color: white;
}

.option-label {
  font-size: 1.5rem;
  font-weight: bold;
  color: #595959;
}

.option-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #595959;
}
</style>
