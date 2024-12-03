<script setup lang="ts">

import AnimatedElement from "~/src/2_view/0_components/animation/AnimatedElement.vue";
</script>

<template>
  <div class="layout">
    <AnimatedElement>
      <div class="content">
        <h2 class="text-common text-title">일만사업이란?</h2>
        <div class="sp-title-desc"/>
        <p class="text-common text-description">
          일차의료 만성질환 관리제도(이하 일만사업)는<br>고혈압이나 당뇨병을 앓는 만성질환 환자들의<br>건강 수명 증진을 위한 국민건강보험 공단의 본사업입니다.</p>
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
}

.text-title {
  color: var(--color-text-secondary, #1C1C1C);
  text-align: center;

  /* heading/40 */
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px; /* 140% */
}

.text-description {
  color: var(--color-text-tertiary, #575757);
  text-align: center;

  /* heading/28 */
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 142.857% */
}

.sp-title-desc {
  margin-top: 16px;
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

  .text-title {
    font-size: 24px;
    line-height: 34px;
  }

  .text-description {
    font-size: 16px;
    line-height: 24px;
  }

  .sp-title-desc {
    margin-top: 12px;
  }
}
</style>