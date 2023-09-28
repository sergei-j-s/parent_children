<template>
  <div class="w-full bg-[#fff] shadow-top-panel">
    <div class="flex items-center h-[76px] mx-[51px]">
      <div class="w-max">
        <Logo />
      </div>
      <Menu />
      <div class="w-max">
        <UserPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Logo } from '@/components/icons';
import Menu from '@/components/Menu.vue';
import UserPanel from '@/components/UserPanel.vue';
</script>

<style scoped></style>
