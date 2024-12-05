
<template>
  <div class="card-layout">
    <div class="backdrop"></div> <!-- 전체 영역에 적용될 블러 배경 -->
    <img class="card-image" :src="props.feature.image" alt="Feature Image"/>
    <div class="card-content">
      <p class="text-subtitle1 text-left animated-title">
        {{ props.feature.title }}</p>
      <div class="mt-16 sm-mt-8"/>
<!--      <img class="expand-icon" src="/svgs/icons/icon-expand-circle.svg" alt="Expand Icon"/>-->
      <p class="text-body2 text-normal text-tertiary text-left">
        {{ props.feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {FeatureModel} from "~/src/0_models/FeatureModel";

const props = defineProps<{
  feature: FeatureModel;
}>();
</script>

<style scoped>
.card-layout {
  position: relative;
  padding: var(--spacing-32);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 카드 크기에 맞게 자르기 */
  position: absolute; /* 콘텐츠와 겹치도록 절대 위치 */
  top: 0;
  left: 0;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01); /* 반투명한 흰색 배경 */
  backdrop-filter: blur(8px); /* 유리 표면 효과 */
  z-index: 1; /* 콘텐츠 뒤에 배치 */
  opacity: 1; /* 기본 상태에서는 숨김 */
  visibility: visible; /* 기본 상태에서는 숨김 */
  transition: opacity 0.5s ease, visibility 0.5s ease; /* 부드러운 전환 */
}

.card-content {
  position: relative;
  z-index: 2; /* 배경보다 앞에 배치 */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.animated-title {
  transition: font-size 0.5s, line-height 0.5s;
}

@media (pointer: coarse) {
  .card-layout {
    padding: var(--spacing-24);
  }
}

</style>
