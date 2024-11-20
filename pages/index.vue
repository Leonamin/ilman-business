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
    <div>
      <Introduction id="intro"/>
      <Feature id="feature"/>
<!--      사이즈가 옆에 16px 늘어나 버리는 문제 있음-->
<!--      <ProfitCalculator id="profit-calculator"/>-->
      <WorkProcess id="work-process"/>
      <DoctorInterview id="faq"/>
      <FAQ/>
    </div>
    <div class="sidebar-layout">
      <IntroSidebar :list-item="sideItems"/>
    </div>

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

/* 사이드바 */

.sidebar-layout {
  position: fixed;
  bottom: 16px;
  right: 16px;
}

</style>
