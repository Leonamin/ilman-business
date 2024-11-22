<script setup lang="ts">

import type {WorkProcessStepModel} from "~/models/WorkProcessStepModel";
import ChevronRight from "~/components/0_components/icons/ChevronRight.vue";
import ChevronDown from "~/components/0_components/icons/ChevronDown.vue";
import ChevronLeft from "~/components/0_components/icons/ChevronLeft.vue";

const process: WorkProcessStepModel[] = [
  {title: '환자 등록 관리', description: '아임파인이 8개의\n작업을 처리합니다.'},
  {title: '진료', description: '아임파인이 6개의\n작업을 처리합니다.'},
  {title: '포괄 평가', description: '아임파인이 4개의\n작업을 처리합니다.'},
  {title: '교육 상담', description: '아임파인이 5개의\n작업을 처리합니다.'},
  {title: '환자 관리', description: '아임파인이 모두\n처리합니다.'},
  {title: '중간 점검', description: '아임파인이 5개의\n작업을 처리합니다.'},
]

const arrows = [
  {x1: 50, y1: 50, x2: 150, y2: 150}, // 첫 번째 화살표
  {x1: 150, y1: 150, x2: 250, y2: 250}, // 두 번째 화살표
];
</script>

<template>
  <h2 class="text-h2 text-semi-bold center-row spb-large">아임파인의 일만사업 절차</h2>
  <div class="process-outer">
<!--    첫번째 줄 1, 2, 3-->
    <div class="process-inner">
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[0].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[0].description }}</p>
      </div>
      <div class="card-gap center-column">
        <ChevronRight color="black" size="24"/>
      </div>
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[1].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[1].description }}</p>
      </div>
      <div class="card-gap center-column">
        <ChevronRight color="black" size="24"/>
      </div>
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[2].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[2].description }}</p>
      </div>
    </div>
<!--    공백 줄 오직 가장 왼쪽 아래 화살표를 위해 존재-->
    <div class="process-inner">
      <div class="flex-equal"></div>
      <div class="card-gap"/>
      <div class="flex-equal"></div>
      <div class="card-gap"/>
      <div class="flex-equal card-gap center-column">
        <ChevronDown color="black" size="24"/>
      </div>
    </div>
<!--    세번째 줄 6, 5, 4-->
    <div class="process-inner">
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[5].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[5].description }}</p>
      </div>
      <div class="card-gap center-column">
        <ChevronLeft color="black" size="24"/>
      </div>
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[4].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[4].description }}</p>
      </div>
      <div class="card-gap center-column">
        <ChevronLeft color="black" size="24"/>
      </div>
      <div class="process-item flex-equal card">
        <p class="text-body1 text-semi-bold spb-small">{{ process[3].title }}</p>
        <p class="text-body2 text-medium text-positive">{{ process[3].description }}</p>
      </div>
    </div>
  </div>

  <!--    <div class="process-grid">-->
  <!--      <div class="process-item" v-for="(step, index) in process" :key="index">-->
  <!--        <p class="text-body1 text-semi-bold spb-small">{{ step.title }}</p>-->
  <!--        <p class="text-body2 text-medium text-positive">{{ step.description }}</p>-->
  <!--      </div>-->
  <!--    </div>-->

</template>


<style scoped>
.process-outer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-inline: var(--padding-xlarge)
}

.process-inner {
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
}

.flex-equal {
  display: flex;
  flex: 1;
}

.process-item {
  padding: var(--padding-large);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  aspect-ratio: 1.2;
}

.card-gap {
  width: 54px;
  height: 54px;
}

@media (max-width: 768px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr); /* 2열로 변경 */
  }
}
</style>
