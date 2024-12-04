<script setup lang="ts">
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

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

const images = [
  {
    src: 'images/background/introduction/image-intro-s1.png',
    alt: '슬라이드 이미지 1',
  },
  {
    src: 'images/background/introduction/image-intro-s2.png',
    alt: '슬라이드 이미지 2',
  },
  {
    src: 'images/background/introduction/image-intro-s3.png',
    alt: '슬라이드 이미지 3',
  },
  {
    src: 'images/background/introduction/image-intro-s4.png',
    alt: '슬라이드 이미지 4',
  },
  {
    src: 'images/background/introduction/image-intro-s5.png',
    alt: '슬라이드 이미지 5',
  },

]

</script>

<template>
  <div class="layout">
    <div class="main-content animate-content">
      <div class="container-catchphrase">
        <p class="text-h1 text-center text-secondary">진료는 그대로<br>매출은 최대로<br>아임파인 일만사업</p>
        <p class="text-subtitle1 text-secondary text-center sp-catchphrase">일차의료 만성질환관리의 정답,
          <span class="mobile-break">아임파인 일만사업</span>
          </p>
      </div>

      <div class="button-list sp-cp-button">
        <SolidButton
            width="156px"
            preset="blueOutline"
            text="더 알아보기"
            @click="handleMoreFeature"
        />
        <SolidButton
            width="156px"
            preset="blue"
            text="문의하기"
            @click="handleContact"
        />
      </div>
    </div>
    <Vue3Marquee class="sp-button-slider" :clone="true">
      <img :src="item.src" :alt="item.alt" v-for="(item, index) in images" :key="index" class="slider-item"/>
    </Vue3Marquee>
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
  scroll-behavior: smooth;
}


/* 메인 컨텐츠 */
.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;

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

/* 캐치프레이즈 */

.container-catchphrase {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-inline: 16px;
}

.sp-catchphrase {
  margin-top: 24px;
}

/* 버튼 리스트 */
.button-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.sp-cp-button {
  margin-top: 48px;
}

.slider-item {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 36px;
}

.sp-button-slider {
  margin-top: 64px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 120px;
  }

  .sp-catchphrase {
    margin-top: 16px;
  }

  .button-list {
    gap: 8px;
  }

  .sp-cp-button {
    margin-top: 32px;
  }

  .slider-item {
    width: 240px;
    height: 240px;
  }

  .mobile-break {
    display: block;
  }

  .sp-button-slider {
    margin-top: 56px;
  }
}
</style>
