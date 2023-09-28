<template>
  <div class="flex flex-row gap-[24px] justify-center w-full">
    <router-link v-for="e in menu" :key="e.title" :to="e.route" class="text-[14px] color-[#1111117A] no-underline">
      <div>
        {{ e.title }}
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { useUsersStore } from '@/store';

const usersStore = useUsersStore();

const menu = [
  {
    title: 'Превью',
    route: { name: 'main' },
    disabled: !usersStore.users.active
  },
  {
    title: 'Форма',
    route: { name: 'edit' },
    disabled: !usersStore.users.active
  },
];
</script>

<style scoped>
.active {
  color:#01A7FD;
  text-decoration: underline;
}
</style>
