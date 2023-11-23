import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Initialize the router
import router from "./router/index";

// Create the app instance
const app = createApp(App);

// Mount the router instance to the app
app.use(router);

app.mount("#app");
