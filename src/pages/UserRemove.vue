<template>
  <div class="flex flex-col gap-[60px] w-[616px]">
    <div class="flex flex-col gap-[20px]">
      <div class="text-[16px] font-medium">Удалить пользователя?</div>
      <div class="text-[16px] font-bold color-[#111111]">
        {{ profile.name }}
      </div>
    </div>
    <ButtonRemove v-on:remove="removeUser()" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/store';
import ButtonRemove from '@/components/ButtonRemove.vue';

const router = useRouter();
const usersStore = useUsersStore();

const profile = ref(JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active])));

const removeUser = () => {
  usersStore.removeUser();
  if (usersStore.users.active) {
    router.push({
      name: 'main',
    });
  } else {
    router.push({
      name: 'user:add',
    });
  }
};

watch(
  () => usersStore.users.active,
  (newValue) => {
    if (newValue) {
      profile.value = JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active]));
    }
  }
);

watch(
  () => usersStore.profiles,
  (newValue) => {
    profile.value = JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active]));
  }
);
</script>

<style scoped></style>
