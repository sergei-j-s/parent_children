<template>
  <div class="flex flex-col gap-[10px]">
    <div class="form flex flex-col w-full h-[56px] border-1 border-solid border-[#F1F1F1] rounded-[4px] relative">
      <input v-model="profile.name" id="parent-name" type="text" placeholder="" :class="{ active: profile.name }" class="form-input" />
      <label for="parent-name" :class="{ active: profile.name }" class="form-label">Имя</label>
    </div>
    <div class="form flex flex-col w-full h-[56px] border-1 border-solid border-[#F1F1F1] rounded-[4px] relative">
      <input v-model="profile.age" id="parent-age" type="number" placeholder="" :class="{ active: profile.age }" class="form-input" />
      <label for="parent-age" :class="{ active: profile.age }" class="form-label">Возраст</label>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { profile } = inject('editProfile');
</script>