<script setup lang="ts">
defineProps<{
  color: string;
  size: string;
}>();

</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46875 9.02941L5.52941 7.96875L11.9991 14.4384L18.4688 7.96875L19.5294 9.02941L11.9991 16.5597L4.46875 9.02941Z" :fill="color"/>
  </svg>

</template>

<style scoped>

</style>