<template>
  <div
      ref="ref1"
      class="animated-text"
      :class="{ visible: isVisible }"
      :style="computedStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Props 정의
const props = defineProps<{
  threshold?: number; // IntersectionObserver threshold
  transitionDuration?: string; // transition 지속 시간
  translateY?: number; // translateY 초기 위치
}>();

// Props 기본값 설정
const threshold = props.threshold ?? 1.0; // 기본값 1.0
const transitionDuration = props.transitionDuration ?? '1.0s'; // 기본값 1.0s
const translateY = props.translateY ?? -20; // 기본값 20px

const ref1 = ref(null); // DOM 요소를 참조
const isVisible = ref(false); // 요소가 보이는지 여부

// 동적으로 스타일 계산
const computedStyle = computed(() => ({
  transition: `opacity ${transitionDuration} ease-out, transform ${transitionDuration} ease-out`,
  transform: `translateY(${isVisible.value ? '0' : `${translateY}px`})`,
  opacity: isVisible.value ? '1' : '0',
}));

let observer: IntersectionObserver | null = null; // IntersectionObserver 인스턴스

onMounted(() => {
  // IntersectionObserver 콜백
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true; // 요소가 보이면 상태 업데이트
        observer?.unobserve(entry.target); // 관찰 중단
      }
    });
  };

  // IntersectionObserver 생성
  observer = new IntersectionObserver(callback, {
    root: null, // 뷰포트 기준
    threshold: threshold, // 10% 이상 보일 때 트리거
  });

  // 관찰 시작
  if (ref1.value) observer.observe(ref1.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect(); // 컴포넌트가 제거될 때 관찰 중지
});
</script>

<style scoped>
.animated-text {
  will-change: opacity, transform;
}
</style>
