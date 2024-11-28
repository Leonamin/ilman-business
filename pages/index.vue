<script setup lang="ts">
import Introduction from "~/src/2_view/0_components/introduction/page/Introduction.vue";
import Feature from "~/src/2_view/0_components/introduction/page/Feature.vue";
import WorkProcess from "~/src/2_view/0_components/introduction/page/WorkProcess.vue";
import FAQ from "~/src/2_view/0_components/introduction/page/FAQ.vue";
import DoctorInterview from "~/src/2_view/0_components/introduction/page/DoctorInterview.vue";
import ProfitCalculator from "~/src/2_view/0_components/introduction/page/ProfitCalculator.vue";
import ScrollToTopButton from "~/src/2_view/0_components/0_components/button/ScrollToTopButton.vue";
import Explanation from "~/src/2_view/0_components/introduction/page/Explanation.vue";

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
