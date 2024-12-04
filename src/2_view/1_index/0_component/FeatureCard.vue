
<template>
  <div class="content">
    <div class="backdrop"></div> <!-- 전체 영역에 적용될 블러 배경 -->
    <img class="card-image" :src="props.feature.image" alt="Feature Image"/>
    <div class="card-content">
      <p class="text-subtitle1 text-left animated-title">
        {{ props.feature.title }}</p>
      <div class="mt-16"/>
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
.content {
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
}

.animated-title {
  transition: font-size 0.5s, line-height 0.5s;
}

.animated-description {
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
}

.expand-icon {
  width: 24px;
  height: 24px;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: transform 0.5s, opacity 0.5s, visibility 0.5s, scale 0.5s;
}

.content:hover .animated-description {
  opacity: 1;
}

.content:hover .backdrop {
  opacity: 1; /* 완전히 보이게 */
  visibility: visible; /* 요소를 표시 */
}

.content:hover .expand-icon {
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
}

@media (pointer: coarse) {
  .content {
    padding: var(--spacing-24);
  }

  /* 모바일에서는 그냥 표시 */
  .content .animated-title {
  }

  .content .animated-description {
    opacity: 1;
  }

  .content .backdrop {
    opacity: 1; /* 완전히 보이게 */
    visibility: visible; /* 요소를 표시 */
  }

  .content .expand-icon {
    display: none;
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }
}

</style>
