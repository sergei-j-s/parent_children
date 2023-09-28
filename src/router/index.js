import { createRouter, createWebHistory } from 'vue-router';
import { useUsersStore } from '@/store';

import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  const usersStore = useUsersStore();

  window.document.title = 'ALEF | ' + to.meta.title;
  if (!usersStore.users.active && to.name != 'user:add') {
    next({ name: 'user:add' });
  }else{
    next();
  };
});

export default router;