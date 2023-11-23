<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

// variable
const quizes = ref(q);

const search = ref("");
console.log(quizes.value);
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
header {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 10px 20px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
