<script setup lang="ts">
import SolidButton from "~/components/0_components/button/SolidButton.vue";
import AnimatedElement from "~/components/0_components/animation/AnimatedElement.vue";
import type {FeatureModel} from "~/models/FeatureModel";
import FeatureCard from "~/components/introduction/0_components/FeatureCard.vue";

const features: FeatureModel[] = [
  {
    title: "도입 단 한달부터\n상승하는 매출을 직접 확인하세요.",
    description: "일만사업에 참여하면 단 한달만에 상승하는 매출을 직접 확인할 수 있습니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 매출 상승을 위한 다양한 서비스를 제공합니다.",
  },
  {
    title: "까다로운 환자관리\n저희가 전부 도와드리겠습니다.",
    description: "일만사업에 참여하면 까다로운 환자관리를 저희가 전부 도와드립니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 환자관리를 위한 다양한 서비스를 제공합니다.",
  },
  {
    title: "필요한 자료\n저희는 이미 준비를 끝내놓았습니다.",
    description: "일만사업에 참여하면 필요한 자료를 저희가 이미 준비를 끝내놓았습니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 필요한 자료를 제공합니다.",
  }
]
</script>

<template>
  <div class="layout">
    <div class="explanation spb-large">
      <AnimatedElement>
        <h2 class="spt-xLarge spb-large text-h2 text-bold">일만사업이란?</h2>
        <h5 class="spb-large text-h5 text-medium ">일차병원 만성질환관리사업(이하 일만사업)은 만성질환(고혈압/당뇨병)을 가진 환자들의 건강 수명 증진을 위한 국민건강보험 공단의 사업입니다.</h5>
      </AnimatedElement>

      <SolidButton preset="primaryOutline" text="일만사업에 대해 더 알아보기"/>
    </div>
    <div class="feature-content">
      <AnimatedElement>

        <h2 class="spb-large text-h2 text-bold text-center">아임파인으로<br>일만사업에 참여한다면?</h2>
      </AnimatedElement>
      <AnimatedElement :threshold=0.1>
        <div class="card-container spb-large">
          <div class="flex-equal" v-for="feature in features" :key="feature.title">
            <FeatureCard :feature="feature" :preset="feature.preset"/>
          </div>
        </div>
      </AnimatedElement>

    </div>
  </div>
</template>

<style scoped>


.flex-equal {
  display: flex;
  flex: 1;
}

.layout {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;
}

/* 일만사업 설명 스타일링 */

.explanation {
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: var(--padding-xlarge);
}

/* 일만사업 기능 스타일링 */

.feature-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  gap: var(--padding-large);
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .card-container {
    flex-direction: column;
  }

  .card {
    margin-inline: var(--padding-large);
  }
}

</style>
