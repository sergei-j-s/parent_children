<template>
  <div class="flex flex-col gap-[30px] w-[616px]">
    <UserForm />
    <ButtonSave v-on:save="addUser()" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/store';
import UserForm from '@/components/UserForm.vue';
import ButtonSave from '@/components/ButtonSave.vue';

const router = useRouter();
const usersStore = useUsersStore();

const user = ref({
  label: '',
  value: Date.now(),
});

provide('editUser', {
  user,
});

const addUser = () => {
  usersStore.addUser(user.value);
  usersStore.addProfile(user.value.value, { id: user.value.value, name: user.value.label, age: null, childrens: [] });
  router.push({
    name: 'edit',
  });
};
</script>
