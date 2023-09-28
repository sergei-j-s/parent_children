<template>
  <div class="flex flex-col gap-[30px] w-[616px]">
    <ParentForm />
    <ChildrenForm />
    <ButtonSave v-on:save="saveProfile()" />
  </div>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import { useUsersStore } from '@/store';
import ParentForm from '@/components/ParentForm.vue';
import ChildrenForm from '@/components/ChildrenForm.vue';
import ButtonSave from '@/components/ButtonSave.vue';

const usersStore = useUsersStore();

const profile = ref(JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active])));

provide('editProfile', {
  profile,
});

const saveProfile = () => {
  usersStore.saveProfile(usersStore.users.active, profile.value);
};

watch(
  () => usersStore.users.active,
  (newValue) => {
    if(newValue){
      profile.value = JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active]));
    };
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
