<template>
  <NConfigProvider :locale="ruRU" :theme-overrides="themeOverrides">
    <n-message-provider>
      <TopPanel />
      <n-scrollbar class="h-[calc(100vh-152px)]">
        <div class="flex justify-center w-full p-[30px]">
          <router-view />
        </div>
      </n-scrollbar>
      <BottomPanel />
    </n-message-provider>
  </NConfigProvider>
</template>

<script setup>
import { NConfigProvider, ruRU } from 'naive-ui';
import TopPanel from '@/components/TopPanel.vue';
import BottomPanel from '@/components/BottomPanel.vue';

const themeOverrides = {
  common: {
    primaryColor: '#01A7FDFF',
    primaryColorHover: '#01A7FDFF',
    // borderColor: '#fff',
  },
  Select: {
        // fontWeight: '700',
    // borderColor: '#fff',
    common: {
        // fontWeight: '700',
      // borderColor: '#fff',
      // boxShadow1: 'none',
      // boxShadow2: 'none',
      // boxShadow3: 'none'
    },
    peers: {
      InternalSelection: {
        // common: {
        //   fontWeight: '700',
        // },
        textColor: '#01A7FDFF',
      },
    },
  },
};
</script>

<style scoped></style>
