<template>
  <div v-on:click="emit('save')" class="flex items-center justify-center w-max h-[44px] bg-[#01A7FD] text-[14px] color-[#fff] border-[2px] border-solid border-[#01A7FD] rounded-[100px] px-[26px] cursor-pointer hover:bg-[#0F79AF] hover:border-[#0F79AF] active:border-[#1111117A]">Сохранить</div>
</template>

<script setup>
const emit = defineEmits(['save']);
</script>