<template>
  <div class="layout">
    <main>
      <NuxtPage/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "~/components/0_components/Footer.vue";

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
}
</style>
