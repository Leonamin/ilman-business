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
      <h1 class="animate-content">진료는 그대로<br>매출은 최대로<br>아임파인 일만사업</h1>
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
    <a href="#feature">
      <div class="arrow-container">
        <img src="~/assets/svgs/icons/icon_chevron_down.svg" alt="Arrow" class="arrow"/>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* 레이아웃 */
.layout {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100vh;

  scroll-behavior: smooth;
}


/* 메인 컨텐츠 */
.main-content {
  background-color: var(--color-bg-primary);
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
}

.main-content h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
}

/* 애니메이션 초기 상태 */
.animate-content {
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeIn 1s linear forwards;
  animation-delay: 1s;
}

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

/* 버튼 리스트 */
.button-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

/* 화살표 컨테이너 */
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
  padding-bottom: 16px; /* 하단 패딩 */
}

/* 화살표 애니메이션 */
.arrow {
  width: 50px;
  animation: moveUpDown 2s infinite;
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 40px;
  }

  .main-content h1 {
    font-size: 2.5rem;
  }

  .button-list {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
