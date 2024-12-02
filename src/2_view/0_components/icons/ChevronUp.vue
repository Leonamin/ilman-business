<script setup lang="ts">
defineProps<{
  color: string;
  size: string;
}>();

</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9585 19.9608L7.37271 21.375L15.9989 12.7488L24.6252 21.375L26.0394 19.9608L15.9989 9.92035L5.9585 19.9608Z" :fill="color"/>
  </svg>

</template>

<style scoped>

</style>