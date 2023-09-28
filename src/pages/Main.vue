<template>
  <div class="flex flex-col gap-[60px] w-[616px]">
    <ParentView />
    <ChildrenView />
  </div>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/store';
import ParentView from '@/components/ParentView.vue';
import ChildrenView from '@/components/ChildrenView.vue';

const router = useRouter();
const usersStore = useUsersStore();

const profile = ref(JSON.parse(JSON.stringify(usersStore.profiles[usersStore.users.active])));

provide('editProfile', {
  profile,
});

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
