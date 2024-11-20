<script setup lang="ts">

// 상단으로 스크롤 이동
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 스크롤
  });
};

</script>

<template>
  <!-- 버튼은 스크롤이 200px 이상 내려갔을 때만 보임 -->
  <button
      class="scroll-to-top"
      @click="scrollToTop"
  >
    <svg class="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.5858 9.00009C11.3668 8.21904 12.6332 8.21904 13.4142 9.00009L18.7071 14.293C19.0976 14.6835 19.0976 15.3167 18.7071 15.7072C18.3166 16.0977 17.6834 16.0977 17.2929 15.7072L12 10.4143L6.70711 15.7072C6.31658 16.0977 5.68342 16.0977 5.29289 15.7072C4.90237 15.3167 4.90237 14.6835 5.29289 14.293L10.5858 9.00009Z"/>
    </svg>

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