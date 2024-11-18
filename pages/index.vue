<script setup lang="ts">
import type {SideItem} from "~/types/SideItem";
import Introduction from "~/components/introduction/page/Introduction.vue";
import Feature from "~/components/introduction/page/Feature.vue";
import ProfitCalculator from "~/components/introduction/page/ProfitCalculator.vue";
import WorkProcess from "~/components/introduction/page/WorkProcess.vue";
import FAQ from "~/components/introduction/page/FAQ.vue";
import DoctorInterview from "~/components/introduction/page/DoctorInterview.vue";
import IntroSidebar from "~/components/introduction/IntroSidebar.vue";

const sideItems: SideItem[] = [
  {id: 1, label: '소개', href: '#intro'},
  {id: 2, label: '기능', href: '#feature'},
  {id: 3, label: '매출 계산기', href: '#profit-calculator'},
  {id: 4, label: '워크 프로세스', href: '#work-process'},
  {id: 4, label: 'FAQ', href: '#faq'},
]
</script>

<template>

  <div class="stack-container">
    <!-- 메인 컨텐츠 -->
    <div class="main-content">

<!--      <Introduction id="intro"/>-->
<!--      <Feature id="feature"/>-->
      <ProfitCalculator id="profit-calculator"/>
      <WorkProcess id="work-process"/>
      <DoctorInterview id="faq"/>
      <FAQ/>
    </div>


    <!-- 사이드바 -->
    <div class="sidebar-layout">
      <IntroSidebar :list-item="sideItems"/>
    </div>
  </div>
</template>


<style scoped>
/* Stack 컨테이너 */
.stack-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

/* 메인 컨텐츠 */
.main-content {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}

/* 사이드바 */
.sidebar-layout {
  position: absolute;
  right: 16px;
  top: 50%;
}

</style>
