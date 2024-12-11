<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // 클라이언트 사이드에서만 실행
  if (process.client) {
    const { initializeFirebase } = useFirebase();
    const { app, analytics } = initializeFirebase();
  }
});
</script>