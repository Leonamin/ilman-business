<script setup lang="ts">
defineProps<{
  color: string;
  size: string;
}>();

</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4706 19.5294L6.94026 11.9991L14.4706 4.46875L15.5312 5.52941L9.06158 11.9991L15.5313 18.4688L14.4706 19.5294Z" :fill="color"/>
  </svg>

</template>

<style scoped>

</style>