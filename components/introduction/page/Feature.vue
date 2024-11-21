<template>
  <div class="layout">
    <div class="explanation">
      <h1>일만사업이란 무엇인가요?</h1>
      <h5>일차병원 만성질환관리사업(이하 일만사업)은 만성질환(고혈압/당뇨병)을 가진 환자들의 건강 수명 증진을 위한 국민건강보험 공단의 사업입니다.</h5>
      <SolidButton preset="primaryOutline" text="일만사업에 대해 더 알아보기"/>
    </div>
    <div class="feature">
      <h1>
        아임파인으로<br>일만사업에 참여한다면?
      </h1>
      <ul class="feature-card">
        <li>도입 단 한달부터 상승하는<br>매출을 직접 확인하세요.</li>
        <li>까다로운 환자관리<br>저희가 전부 도와드리겠습니다.</li>
        <li>필요한 자료<br>저희는 이미 준비를 끝내놓았습니다.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
}

.explanation h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

.explanation h5 {
  font-size: 1.5rem;
  font-weight: normal;
}

/* 일만사업 기능 스타일링 */

.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.feature h1 {
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
}

.feature-card li {
  flex: 1;
  margin: 20px;
}


</style>
<script setup lang="ts">
import SolidButton from "~/components/0_components/button/SolidButton.vue";
</script>