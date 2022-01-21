import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout';
import Home from '@/views/Home';
import Pokemon from '@/views/Pokemon';
import Favorite from '@/views/Favorite';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'Home',
        component: Home,
      },
      {
        path: 'Pokemon',
        component: Pokemon,
      },
      {
        path: 'Favorite',
        component: Favorite,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
