<script setup lang="ts">
import Introduction from "~/components/introduction/page/Introduction.vue";
import Feature from "~/components/introduction/page/Feature.vue";
import WorkProcess from "~/components/introduction/page/WorkProcess.vue";
import FAQ from "~/components/introduction/page/FAQ.vue";
import DoctorInterview from "~/components/introduction/page/DoctorInterview.vue";
import ProfitCalculator from "~/components/introduction/page/ProfitCalculator.vue";
import ScrollToTopButton from "~/components/0_components/button/ScrollToTopButton.vue";

</script>

<template>
  <div class="layout">
    <!-- 메인 컨텐츠 -->
    <div>
      <Introduction id="intro"/>
      <Feature id="feature"/>
      <ProfitCalculator id="profit-calculator"/>
      <WorkProcess id="process"/>
      <DoctorInterview />
      <FAQ id="faq"/>
    </div>
    <div class="sidebar-layout">
      <ScrollToTopButton/>
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

</style>
