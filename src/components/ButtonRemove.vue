<template>
  <div v-on:click="emit('remove')" class="flex items-center justify-center w-max h-[44px] bg-[#F9E3E3] text-[14px] color-[#DB524E] border-[2px] border-solid border-[#F9E3E3] rounded-[100px] px-[26px] cursor-pointer hover:bg-[#F9E3E3] hover:border-[#F9E3E3] active:border-[#1111117A]">Удалить</div>
</template>

<script setup>
const emit = defineEmits(['remove']);
</script>