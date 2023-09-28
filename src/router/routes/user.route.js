import UserAdd from '@/pages/UserAdd.vue';
import UserEdit from '@/pages/UserEdit.vue';
import UserRemove from '@/pages/UserRemove.vue';

const user = [{
  path: '/user_add',
  name: 'user:add',
  component: UserAdd,
  meta: {
    title: 'Пользователь - Добавление',
  }
}, {
  path: '/user_edit',
  name: 'user:edit',
  component: UserEdit,
  meta: {
    title: 'Пользователь - Редактирование',
  }
}, {
  path: '/user_remove',
  name: 'user:remove',
  component: UserRemove,
  meta: {
    title: 'Пользователь - Удаление',
  }
}];

export { user };