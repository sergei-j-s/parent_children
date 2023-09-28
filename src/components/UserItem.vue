<template>
  <div class="flex flex-col gap-[10px]">
    <div class="form flex flex-col w-full h-[56px] border-1 border-solid border-[#F1F1F1] rounded-[4px] relative">
      <input v-model="user.label" id="user-label" type="text" placeholder="" :class="{ active: user.label }" class="form-input" />
      <label for="user-label" :class="{ active: user.label }" class="form-label">Имя</label>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const { user } = inject('editUser');
</script>