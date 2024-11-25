<script setup lang="ts">
import IndexHeader from "~/components/introduction/0_components/IndexHeader.vue";
import SolidButton from "~/components/0_components/button/SolidButton.vue";

const handleMoreFeature = () => {
//   #feature로 스크롤 이동
  window.location.href = '#feature';
};

const router = useRouter();

const handleContact = () => {
//   #contact로 스크롤 이동
  router.push('/contact');
};

const isMobile = ref(false);

// 모바일 화면 768 픽셀 이하인 경우 이미지 변경
onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
  isMobile.value = window.innerWidth <= 768;
});

</script>

<template>
  <div class="layout">
    <IndexHeader/>
    <div class="main-content animate-content">
      <h1 class="text-h1 text-bold spb-medium text-center">진료는 그대로<br>매출은 최대로<br>아임파인 일만사업</h1>

      <div class="button-list">
        <SolidButton
            width="150px"
            preset="primaryOutline"
            borderRadius="8px"
            text="더 알아보기"
            @click="handleMoreFeature"
        />
        <SolidButton
            width="150px"
            preset="primary"
            borderRadius="8px"
            text="문의하기"
            @click="handleContact"
        />
      </div>
    </div>
    <!--    코드 개선 필요 v-if 사용하면 성능 낭비-->
    <div class="background-image">
      <img v-if="!isMobile" src="~assets/images/intro-background.jpg" alt="Feature Background"/>
      <img v-if="isMobile" src="~assets/images/intro-background-mobile.jpg" alt="Feature Background"/>
    </div>
    <!-- 화살표 -->
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
  height: 100dvh;

  scroll-behavior: smooth;
}


/* 메인 컨텐츠 */
.main-content {
  position: relative; /* z-index 적용을 위해 설정 */
  z-index: 1; /* 배경 이미지 위에 표시 */
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  padding: var(--padding-xlarge);
}

/* 애니메이션 초기 상태 */
.animate-content {
  opacity: 0;
  transform: translateY(-15px);
  animation: fadeIn 0.5s linear forwards;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
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

.background-image {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%; /* 화살표와 버튼 사이에 위치 */
  z-index: 0; /* 메인 컨텐츠 뒤에 배치 */
  overflow: hidden;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하며 요소에 맞게 채우기 */
  /* 그라데이션 마스크 */
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
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
    font-size: var(--font-size-h1-mobile);
  }

  .button-list {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
