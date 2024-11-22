<script setup lang="ts">

import type {WorkProcessStepModel} from "~/models/WorkProcessStepModel";

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
    <div class="process-grid">
      <div class="process-item" v-for="(step, index) in process" :key="index">
        <p class="text-body1 text-semi-bold spb-small">{{ step.title }}</p>
        <p class="text-body2 text-medium text-positive">{{ step.description }}</p>
      </div>
    </div>

</template>


<style scoped>
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 1rem;
  position: relative;
  padding: 1rem;
}

.process-item {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}


@media (max-width: 768px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr); /* 2열로 변경 */
  }
}
</style>
