<script setup lang="ts">
import Introduction from "~/src/2_view/introduction/page/Introduction.vue";
import Feature from "~/src/2_view/introduction/page/Feature.vue";
import WorkProcess from "~/src/2_view/introduction/page/WorkProcess.vue";
import FAQ from "~/src/2_view/introduction/page/FAQ.vue";
import DoctorInterview from "~/src/2_view/introduction/page/DoctorInterview.vue";
import ProfitCalculator from "~/src/2_view/introduction/page/ProfitCalculator.vue";
import Explanation from "~/src/2_view/introduction/page/Explanation.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";
import FixedContactButton from "~/src/2_view/1_index/0_component/FixedContactButton.vue";

definePageMeta({
  title: '아임파인 일만사업',
  meta: [
    {
      name: 'description',
      content: '진료는 그대로\n' +
          '매출은 최대로\n' +
          '아임파인 일만사업\n' +
          '일차의료 만성질환관리의 정답, 아임파인 일만사업',
    }
  ]
});

useHead({
  title: '아임파인 일만사업',
  meta: [
    {
      name: 'description',
      content: '진료는 그대로\n' +
          '매출은 최대로\n' +
          '아임파인 일만사업\n' +
          '일차의료 만성질환관리의 정답, 아임파인 일만사업',
    }
  ]
});


const isVisible = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;

  // 기기의 뷰포트 높이
  const viewportHeight = window.innerHeight;

  // 기기 높이의 2배 이상 스크롤하면 표시
  isVisible.value = scrollY > viewportHeight;
};

const router = useRouter();

const handleContact = () => {
//   #contact로 스크롤 이동
  router.push('/contact');
};


</script>

<template>
  <div class="layout">
    <!-- 메인 컨텐츠 -->
    <div>
      <Introduction id="intro"/>
      <Explanation id="explanation"/>
      <Feature id="feature"/>
      <ProfitCalculator id="profit-calculator"/>
      <WorkProcess id="process"/>
      <DoctorInterview/>
      <FAQ id="faq"/>
    </div>
    <!--    <ScrollToTopButton/>-->
    <div class="bottom-bar"
         :class="{ 'visible': isVisible }"
    >
      <span class="text">만성질환관리의 정답, 아임파인과 함께</span>
      <div class="button-container">
        <SolidButton preset="blue" text="일만사업 시작하기" @click="handleContact"/>
        <img
            class="cursor-image"
            src="/svgs/icons/icon-cursor-click-01.svg"
            alt="cursor"
        />
      </div>
    </div>
    <FixedContactButton class="contact-button" :class="{ 'visible': isVisible }"/>
  </div>


</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
}


.bottom-bar {
  position: fixed;
  bottom: 48px; /* 화면 아래에서 48px */
  left: 50%;
  background-color: #333; /* 바 배경색 */
  color: white; /* 텍스트 색상 */
  display: flex;
  align-items: center;
  padding: 12px 24px; /* 상하/좌우 패딩 */
  border-radius: 100px; /* 둥근 모서리 */
  z-index: 1000; /* 항상 위에 표시되도록 */
  opacity: 0; /* 초기 상태: 투명 */
  transform: translateX(-50%) translateY(20px); /* 아래쪽으로 약간 이동 */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.bottom-bar.visible {
  opacity: 1; /* 보이게 설정 */
  transform: translateX(-50%) translateY(0); /* 위치 이동 */
}

.text {
  margin-right: 16px; /* 버튼과 텍스트 간격 */
  font-size: 16px;
  font-weight: bold;
}

.button-container {
  position: relative; /* 버튼 위에 커서를 올리기 위한 기준 */
}

.button-container:hover .cursor-image {
  top: 16px; /* 버튼 위로 조금 띄움 */
  right: 45px; /* 버튼 오른쪽으로 위치 조정 */
  transform: scale(1.2); /* 커서 이미지 확대 */
}

.cursor-image {
  position: absolute;
  top: 0; /* 버튼 위로 조금 띄움 */
  right: -25px; /* 버튼 오른쪽으로 위치 조정 */
  width: 48px; /* 커서 이미지 크기 */
  height: 48px;
  pointer-events: none; /* 커서 이미지가 클릭을 방해하지 않도록 */
  transition: transform 0.3s ease 0s, top 0.3s ease 0s, right 0.3s ease 0s; /* 부드러운 전환 */
}

.contact-button {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-button.visible {
  opacity: 1; /* 보이게 설정 */
}

@media (max-width: 768px) {
  .bottom-bar {
    display: none;
  }

  .contact-button {
    display: block;
  }
}
</style>
