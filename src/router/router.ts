import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: '/', component: () => import("../pages/home/HomePage.vue") },
    {
      name: "game",
      path: '/game/:id',
      redirect: { name: "game_lobby" },
      component: () => import("../pages/game/GamePage.vue"),
      children: [
        { name: "game_lobby", path: "/game/:id/lobby", component: () => import("../pages/game/views/LobbyView.vue") },
        { name: "game_buzzer", path: "/game/:id/buzzer", component: () => import("../pages/game/views/BuzzerView.vue") }
      ],
    },
  ],
});