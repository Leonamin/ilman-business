<script setup lang="ts">

import AnimatedElement from "~/components/0_components/animation/AnimatedElement.vue";
</script>

<template>
  <div class="layout">
    <AnimatedElement>
      <div class="content">
        <h2 class="text-h2 text-semi-bold line-height-56 text-center">일만사업이란?</h2>
        <p class="text-h4 text-semi-bold text-tertiary line-height-48 text-center">일차의료 만성질환 관리제도(이하 일만사업)는<br>고혈압이나
          당뇨병을 앓는 만성질환 환자들의<br>건강 수명 증진을 위한 국민건강보험 공단의 시범사업입니다.</p>
      </div>
    </AnimatedElement>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100dvh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .layout {
    height: auto;
    padding-top: 300px;
    padding-bottom: 300px;
  }

  .content {
    padding: 0 16px;
  }
}
</style>