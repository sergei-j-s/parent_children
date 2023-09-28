<template>
  <div class="flex flex-col gap-[30px] w-[616px]">
    <UserForm />
    <ButtonSave v-on:save="saveUser()" />
  </div>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import { useUsersStore } from '@/store';
import UserForm from '@/components/UserForm.vue';
import ButtonSave from '@/components/ButtonSave.vue';

const usersStore = useUsersStore();

const user = ref(JSON.parse(JSON.stringify(usersStore.users.options.find((e) => e.value == usersStore.users.active))));
const profile = ref(JSON.parse(JSON.stringify(usersStore.profiles[user.value.value])));

provide('editUser', {
  user,
});

const saveUser = () => {
  usersStore.saveUser(user.value);
  usersStore.saveProfile(user.value.value, { ...profile.value, name: user.value.label });
};

watch(
  () => usersStore.users.active,
  (newValue) => {
    if (newValue) {
      user.value = JSON.parse(JSON.stringify(usersStore.users.options.find((e) => e.value == usersStore.users.active)));
      profile.value = JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active]));
    }
  }
);

watch(
  () => usersStore.profiles,
  (newValue) => {
    user.value = JSON.parse(JSON.stringify(usersStore.users.options.find((e) => e.value == usersStore.users.active)));
    profile.value = JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active]));
  }
);
</script>
