<template>
  <div class="flex items-center gap-[10px]">
    <n-select v-model:value="usersStore.users.active" :options="usersStore.users.options" @update:value="usersStore.saveUsers" filterable size="large" :bordered="false" class="w-[175px]" />
    <n-dropdown trigger="click" :options="userMenu" @select="dropdownSelect" :zIndex="30001" placement="bottom-end">
      <div class="flex flex-row gap-[10px] items-center cursor-pointer">
        <More class="w-[24px]" />
      </div>
    </n-dropdown>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/store';
import { More } from '@/components/icons';

const router = useRouter();
const usersStore = useUsersStore();

const checkUsers = computed(() => {
  return !usersStore.users.active;
});

const userMenu = ref([
  {
    label: 'Редактировать',
    key: 'user:edit',
    disabled: checkUsers
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: 'Добавить',
    key: 'user:add',
  },
  {
    label: 'Удалить',
    key: 'user:remove',
    disabled: checkUsers
  },
]);

const dropdownSelect = (key) => {
  if (key) {
    router.push({
      name: key,
    });
  }
};
</script>

<style scoped></style>
