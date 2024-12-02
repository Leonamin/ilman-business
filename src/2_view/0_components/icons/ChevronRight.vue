<script setup lang="ts">
defineProps<{
  color: string;
  size: string;
}>();

</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52941 19.5312L8.46875 18.4706L14.9384 12.0009L8.46875 5.53125L9.52941 4.47059L17.0597 12.0009L9.52941 19.5312Z" :fill="color"/>
  </svg>
</template>

<style scoped>

</style>



