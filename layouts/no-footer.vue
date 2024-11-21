<!--사용할 때는 아래처럼 -->
<!--<script setup>-->
<!--definePageMeta({-->
<!--  layout: 'no-footer',-->
<!--});-->
<!--</script>-->

<template>
  <div class="layout">
    <main>
      <NuxtPage/>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
