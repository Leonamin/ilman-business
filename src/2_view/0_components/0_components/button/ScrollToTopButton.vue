<script setup lang="ts">

// 상단으로 스크롤 이동
import ChevronUp from "~/src/2_view/0_components/0_components/icons/ChevronUp.vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 스크롤
  });

  window.location.hash = '';
};

</script>

<template>
  <!-- 버튼은 스크롤이 200px 이상 내려갔을 때만 보임 -->
  <button
      class="scroll-to-top"
      @click="scrollToTop"
  >
    <ChevronUp color="white" size="24" />

  </button>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 32px; /* 화면 하단으로부터 32px */
  right: 32px; /* 화면 오른쪽으로부터 32px */
  width: 50px;
  height: 50px;
  background-color: var(--color-bg-inverse);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chevron-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

/* 호버 상태 */
.scroll-to-top:hover {
  background-color: var(--color-bg-inverse-hover);
  transform: scale(1.1); /* 살짝 확대 */
}

/* 숨길 때 투명하게 */
.scroll-to-top[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}

</style>