<template>
  <div class="flex flex-col gap-[20px]">
    <div class="flex items-center justify-between">
      <div class="text-[16px] font-medium">Дети</div>
      <!-- <div v-if="profile.childrens.length == 0" v-on:click="addChildren()" class="flex items-center justify-center gap-[7px] w-max h-[44px] bg-[#fff] text-[14px] color-[#01A7FD] border-[2px] border-solid border-[#01A7FD] rounded-[100px] px-[26px] cursor-pointer active:border-[#1111117A]">
        <Plus />
        Добавить ребенка
      </div> -->
    </div>
    <div class="flex flex-col gap-[20px]">
      <div v-for="children in profile.childrens" class="flex items-center w-max h-[44px] bg-[#F1F1F1] text-[16px] font-bold color-[#111111] rounded-[4px] py-[10px] px-[20px]">
        {{ children.name }}<template v-if="children.age">, {{ children.age }} {{ buildYear(children.age, ['год', 'года', 'лет']) }} </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { profile } = inject('editProfile');

const addChildren = () => {
  router.push({
    name: 'edit'
  })
};

const buildYear = (value, words) => {
  value = Math.abs(value) % 100;
  let num = value % 10;

  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];

  return words[2];
};
</script>
