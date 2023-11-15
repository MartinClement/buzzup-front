import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
import LobbyPage from "../pages/lobby/LobbyPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: '/', component: HomePage },
    {
      name: "game",
      path: '/game/:id',
      redirect: { name: "game_lobby" },
      children: [
        { name: "game_lobby", path: "/game/:id/lobby", component: LobbyPage }
      ],
    },
  ],
});