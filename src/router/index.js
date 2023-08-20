import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import CreateMovie from '../components/CreateMovie.vue';
import MovieList from '../components/MovieList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateMovie },
  { path: '/list', component: MovieList },
  // ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
