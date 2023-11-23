import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";
import ResultView from "../views/ResultView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuizesView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView,
    },
    {
      path: "/result/:score/:total",
      name: "result",
      component: ResultView,
    },
  ],
});

export default router;
