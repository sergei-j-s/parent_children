<template>
  <div class="flex flex-col gap-[20px]">
    <div class="flex">
      <div class="text-[16px] font-medium">Данные пользователя</div>
    </div>
    <UserItem />
  </div>
</template>

<script setup>
import UserItem from '@/components/UserItem.vue';
</script>