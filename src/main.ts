import { createApp } from 'vue'

import appRouter from "./router/router";

import './style.css'

import App from './App.vue'

const app = createApp(App);
app.use(appRouter);
app.mount('#app');
