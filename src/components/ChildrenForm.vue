<template>
  <div class="flex flex-col gap-[20px]">
    <div class="flex items-center justify-between">
      <div class="text-[16px] font-medium">Дети (макс. 5)</div>
      <div v-if="profile.childrens.length < 5" v-on:click="addChildren()" class="flex items-center justify-center gap-[7px] w-max h-[44px] bg-[#fff] text-[14px] color-[#01A7FD] border-[2px] border-solid border-[#01A7FD] rounded-[100px] px-[26px] cursor-pointer active:border-[#1111117A]">
        <Plus />
        Добавить ребенка
      </div>
    </div>
    <div class="flex flex-col gap-[10px]">
      <ChildrenItem v-for="(e, i) in profile.childrens" :key="e.id" v-on:remove:children="removeChildren($event)" :children="e" />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import ChildrenItem from '@/components/ChildrenItem.vue';
import { Plus } from '@/components/icons';

const { profile } = inject('editProfile');

const addChildren = () => {
  profile.value.childrens.push({
    id: Date.now(),
    name: '',
    age: null
  });
};

const removeChildren = (id) => {
  let index = profile.value.childrens.findIndex(e => e == id);
  profile.value.childrens.splice(index, 1);
};
</script>
