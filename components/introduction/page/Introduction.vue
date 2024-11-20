<script setup lang="ts">
import IndexHeader from "~/components/introduction/0_components/IndexHeader.vue";
import SolidButton from "~/components/0_components/button/SolidButton.vue";

const handleClick = () => {
};

</script>

<template>
  <div class="layout">

    <IndexHeader/>
    <div class="main-content">
      <div>
        <h1 class="animate-content">진료는 그대로<br>매출은 최대로<br>아임파인 일만사업</h1>
      </div>
      <div class="button-list animate-content">
        <SolidButton
            width="150px"
            preset="primaryOutline"
            borderRadius="8px"
            text="더 알아보기"
            @click="handleClick"
        />
        <SolidButton
            width="150px"
            preset="primary"
            borderRadius="8px"
            text="문의 하기"
            @click="handleClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  scroll-behavior: smooth;
}

.main-content {
  background-color: var(--color-bg-primary);
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: start;
  flex-direction: column;
}

.main-content h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
}

.main-content h5 {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
}

/* 초기 상태 */
h1, h5 {
  opacity: 0;
  transform: translateY(-30px);
}

/* 애니메이션 활성화 */
.animate-content {
  animation: fadeIn 1s linear forwards;
  animation-delay: 1s; /* 1초 뒤에 시작 */
}

/* Keyframes 정의 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.button-list {
  opacity: 0;
  transform: translateY(-30px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 40px;
  }

  .main-content h1 {
    font-size: 2.5rem;
  }

  .main-content h5 {
    font-size: 1rem;
  }
}
</style>

