import "./style.css";
import StudentList from "./components/StudentList";
import ToggleComponent from "./components/ToggleComponent";
import SearchComponent from "./components/SearchComponent";

import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
// import eventBus from "vue3-eventbus";

const routes = [
  { path: "/", component: StudentList },
  { path: "/addsv", component: ToggleComponent },
  { path: "/search", component: SearchComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
// app.use(eventBus);
app.use(router);
app.mount("#app");
