<script setup>
import { defineProps, defineEmits, watch } from "vue";
const { currentQuestion, totalQuestions, completion } = defineProps([
  "currentQuestion",
  "totalQuestions",
  "completion",
]);

console.log(currentQuestion, totalQuestions);
</script>

<template>
  <header>
    <h4>Question {{ `${currentQuestion + 1}/${totalQuestions}` }}</h4>
    <div class="bar">
      <div
        class="completion"
        :style="{ width: completion.toString() + '%' }"
      ></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.bar {
  width: 300px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  background-color: #ff8c00;
  border-radius: 10px;
}
</style>
