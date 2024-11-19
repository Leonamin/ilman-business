<script setup lang="ts">
import type {SideItem} from "~/types/SideItem";
import Introduction from "~/components/introduction/page/Introduction.vue";
import Feature from "~/components/introduction/page/Feature.vue";
import ProfitCalculator from "~/components/introduction/page/ProfitCalculator.vue";
import WorkProcess from "~/components/introduction/page/WorkProcess.vue";
import FAQ from "~/components/introduction/page/FAQ.vue";
import DoctorInterview from "~/components/introduction/page/DoctorInterview.vue";
import IntroSidebar from "~/components/introduction/IntroSidebar.vue";
import IndexHeader from "~/components/introduction/0_components/IndexHeader.vue";

const sideItems: SideItem[] = [
  {id: 1, label: '소개', href: '#intro'},
  {id: 2, label: '기능', href: '#feature'},
  {id: 3, label: '매출 계산기', href: '#profit-calculator'},
  {id: 4, label: '워크 프로세스', href: '#work-process'},
  {id: 4, label: 'FAQ', href: '#faq'},
]
</script>

<template>
  <div class="layout">
    <!-- 메인 컨텐츠 -->
    <div class="main-content">
      <Introduction id="intro"/>
      <Feature id="feature"/>
      <ProfitCalculator id="profit-calculator"/>
      <WorkProcess id="work-process"/>
      <DoctorInterview id="faq"/>
      <FAQ/>
    </div>
      <div class="sidebar-content">
      <IntroSidebar :list-item="sideItems"/>
      </div>

  </div>


</template>


<style scoped>
@media (max-width: 768px) {
  .header-container {
    height: var(--app-bar-height-mobile);
  }
}

.layout {
  justify-content: space-between;

  display: flex;
  width: 100%;
  background-color: var(--background-color);
}

/* 메인 컨텐츠 */
.main-content {
  scroll-behavior: smooth;
  flex: 2
}

.spacer {
  flex: 1;
}

/* 사이드바 */
.sidebar {
  position: fixed;
  bottom: 0;
}

.sidebar-content {
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-content: center;
  display: flex;
}

</style>
