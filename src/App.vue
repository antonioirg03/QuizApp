<script setup>
import { RouterView } from "vue-router";
</script>

<!-- The main app -->
<template>
  <div class="container">
    <!-- Router Component -->
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
