<template>
  <div class="card">
    <div class="backdrop"></div> <!-- 전체 영역에 적용될 블러 배경 -->
    <img class="card-image" :src="props.feature.image" alt="Feature Image"/>
    <div class="card-content">
      <p class="title text-semi-bold text-left spb-8 text-line-break line-height-34">
        {{ props.feature.title }}</p>
      <img class="expand-icon" src="/svgs/icons/icon-expand-circle.svg" alt="Expand Icon"/>
      <p class="description text-medium text-left text-tertiary text-line-break line-height-20">
        {{ props.feature.description }}</p>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script setup lang="ts">
import type {FeatureModel} from "~/models/FeatureModel";

const props = defineProps<{
  feature: FeatureModel;
}>();
</script>

<style scoped>
.spacer {
  flex: 1;
}

.card {
  position: relative;
  padding: var(--spacing-32);
  border-radius: 16px;
  aspect-ratio: 1.23;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
  border: solid 1px var(--color-border-primary);
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
  background: rgba(255, 255, 255, 0.2); /* 반투명한 흰색 배경 */
  backdrop-filter: blur(10px); /* 유리 표면 효과 */
  z-index: 1; /* 콘텐츠 뒤에 배치 */
  opacity: 0; /* 기본 상태에서는 숨김 */
  visibility: hidden; /* 기본 상태에서는 숨김 */
  transition: opacity 0.5s ease, visibility 0.5s ease; /* 부드러운 전환 */
}

.card-content {
  position: relative;
  z-index: 2; /* 배경보다 앞에 배치 */
  width: 100%;
}

.title {
  font-size: var(--font-size-h24);
  white-space: pre-line;
  word-break: keep-all;
  word-wrap: break-word;
  transition: font-size 0.5s, line-height 0.5s;
}

.description {
  opacity: 0;
  font-size: var(--font-size-body16);
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

.card:hover .title {
  font-size: var(--font-size-h18);
  line-height: 24px;
}

.card:hover .description {
  opacity: 1;
}

.card:hover .backdrop {
  opacity: 1; /* 완전히 보이게 */
  visibility: visible; /* 요소를 표시 */
}

.card:hover .expand-icon {
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
}

@media (max-width: 768px) {
  .card {
    aspect-ratio: 1.0;
  }
}

@media (pointer: coarse) {
  /* 모바일에서는 그냥 표시 */
  .card .title {
    font-size: var(--font-size-h18);
    line-height: 24px;
  }

  .card .description {
    opacity: 1;
  }

  .card .backdrop {
    opacity: 1; /* 완전히 보이게 */
    visibility: visible; /* 요소를 표시 */
  }

  .card .expand-icon {
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }

  /*
  .card:hover .title {
    font-size: var(--font-size-h24);
    line-height: 34px;
  }

  .card:hover .description {
    opacity: 0;
  }

  .card:hover .backdrop {
    opacity: 0;
    visibility: hidden;
  }

  .card:hover .expand-icon {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  */

}

</style>
