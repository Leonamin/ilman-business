<template>
  <div class="layout">
    <IndexHeader/>
    <main>
      <NuxtPage/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "~/src/2_view/0_components/0_components/Footer.vue";
import IndexHeader from "~/src/2_view/0_components/introduction/0_components/IndexHeader.vue";

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
