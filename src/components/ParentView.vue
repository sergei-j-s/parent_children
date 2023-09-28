<template>
  <div class="flex flex-col gap-[20px]">
    <div class="text-[16px] font-medium">Персональные данные</div>
    <div class="text-[16px] font-bold color-[#111111]">
      {{ profile.name }}<template v-if="profile.age">, {{ profile.age }} {{ buildYear(profile.age, ['год', 'года', 'лет']) }} </template>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { profile } = inject('editProfile');

const buildYear = (value, words) => {
  value = Math.abs(value) % 100;
  let num = value % 10;

  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];

  return words[2];
};
</script>
