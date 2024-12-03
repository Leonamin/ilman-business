<script setup lang="ts">

import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

interface NewsModel {
  title: string;
  date: string;
  content: string;
}

interface FileModel {
  title: string;
  capacity: string;
}

const news: NewsModel[] = [
  {
    title: "일차의료 만성질환 관리사업",
    date: "2021-10-01",
    content: "국민건강보험 일차의료 만성질환 관리 시범사업은 고혈압·당뇨병 환자에게 지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다."
  },
  {
    title: "사업 소개",
    date: "2021-10-01",
    content: "사업은 스타크래프트에서 마린에게 중요한 업그레이드로 아카데미(사관학교)에서 업그레이드가 가능합니다. 사업을 연구하면 마린의 원거리 범위는 5에서 6이 늘어나게 되며 조금더 먼 거리에서 적들과 조우했을 때 공격할 수 있게됩니다."
  },
  {
    title: "관련 소식",
    date: "2021-10-01",
    content: ""
  }
]
</script>

<template>
  <body class="layout">
  <div class="content">
    <div>
      <h1 class="text-h1">일차의료 만성질환 관리사업</h1>
      <span
          class="text-body1">국민건강보험 일차의료 만성질환 관리 시범사업은 고혈압·당뇨병 환자에게 지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.</span>
    </div>
    <div></div>
    <div>
      <h2 class="text-h2">사업 소개</h2>
      <p class="text-body1">사업은 스타크래프트에서 마린에게 중요한 업그레이드로 아카데미(사관학교)에서 업그레이드가 가능합니다. 사업을 연구하면 마린의 원거리 범위는 5에서 6이 늘어나게 되며
        조금더 먼 거리에서 적들과 조우했을 때 공격할 수 있게됩니다. </p>
    </div>
    <div></div>
    <div>
      <SolidButton preset="blue" text="심평원(HIRA) 사업 소개"/>
    </div>
    <div></div>
    <div class="news-container">
      <h2 class="text-h2">관련 소식</h2>
      <div class="news-card" v-for="item in news" :key="item.title">
        <h3 class="text-h3">{{ item.title }}</h3>
        <p class="text-body1">{{ item.date }}</p>
        <p class="text-body1">{{ item.content }}</p>
      </div>
    </div>
    <div></div>

    <div>
      <h2>사업 자료</h2>

    </div>
  </div>
  </body>
</template>


<style scoped>
.layout {
  width: 100%;
  padding-top: var(--app-bar-height-desktop);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: var(--desktop-max-width);
  align-self: center;
}

@media (max-width: 768px) {
  .content {
    padding: 0 16px;
  }
}
</style>