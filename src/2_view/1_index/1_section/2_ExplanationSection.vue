<script setup lang="ts">

import AnimatedElement from "~/src/2_view/0_components/animation/AnimatedElement.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

const router = useRouter();
const handleMoreFeature = () => {
  router.push('/explanation');
};
</script>

<template>
  <div class="layout">
    <AnimatedElement>
      <div class="content">
        <h2 class="text-h2 text-center">일만사업이란?</h2>
        <div class="mt-54 sm-mt-36"/>
        <p class="text-h4 text-center text-tertiary">
          일차의료 만성질환관리 사업(이하 일만사업)은<br>국민건강보험공단에서 진행하는 사업으로,<br>동네의원 중심의 고혈압 · 당뇨병 환자를 위한<br>지속적·포괄적 만성질환 관리체계를<br>구축하는 것을 목표로 합니다.</p>
        <div class="mt-48 sm-mt-36"/>
        <SolidButton preset="blue" text="자세히 알아보기" @click="handleMoreFeature"/>
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

@media (max-width: 768px) {
  .layout {
    height: auto;
    padding-top: 100px;
    padding-bottom: var(--mobile-section-spacing);
  }

  .content {
    padding: 0 16px;
  }
}
</style>