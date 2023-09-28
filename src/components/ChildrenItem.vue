<template>
  <div class="flex flex-row gap-[18px]">
    <div class="form flex flex-col w-full h-[56px] border-1 border-solid border-[#F1F1F1] rounded-[4px] relative">
      <input v-model="children.name" :id="`children-name-${children.id}`" type="text" placeholder="" :class="{ active: children.name }" class="form-input" />
      <label :for="`children-name-${children.id}`" :class="{ active: children.name }" class="form-label">Имя</label>
    </div>
    <div class="form flex flex-col w-full h-[56px] border-1 border-solid border-[#F1F1F1] rounded-[4px] relative">
      <input v-model="children.age" :id="`children-age-${children.id}`" type="number" placeholder="" :class="{ active: children.age }" class="form-input" />
      <label :for="`children-age-${children.id}`" :class="{ active: children.age }" class="form-label">Возраст</label>
    </div>
    <div class="flex flex-col items-center justify-center w-[60px] h-[56px]">
      <div v-on:click="emit('remove:children', children.id)" class="text-[14px] color-[#01A7FD] cursor-pointer hover:underline">Удалить</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  children: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['remove:children']);
</script>
