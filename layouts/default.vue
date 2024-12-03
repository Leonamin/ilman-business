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
import Footer from "~/src/2_view/0_components/Footer.vue";
import IndexHeader from "~/src/2_view/1_index/0_component/IndexHeader.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
  padding-top: var(--app-bar-height-desktop); /* IndexHeader의 높이만큼 여백 추가 */
  overflow-x: hidden;
}

@media (max-width: 768px) {
  main {
    padding-top: var(--app-bar-height-mobile); /* 모바일 환경에서 높이 보정 */
  }
}
</style>
