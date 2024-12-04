// 인터페이스 정의

<script setup lang="ts">
import {ref} from 'vue';

import {FileModel} from "~/src/0_models/FileModel.js";
import {NewsModel} from "~/src/0_models/NewsModel.js";

definePageMeta({
  title: '일차의료 만성질환 관리사업',
  meta: [
    {
      name: 'description',
      content: '일차의료 만성질환 관리사업이란?\n' +
          '국민건강보험 일차의료 만성질환 관리 시범사업은 고혈압·당뇨병 환자에게 지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.'
    }
  ],
  layout: 'no-footer',
});

const introduction = "대한민국의 보건의료체계는 높은 접근성과 우수한 의료 인프라를 바탕으로 양질의 의료서비스를 제공하고 있습니다. \n" +
    "하지만 만성질환 관리체계는 아직 미흡한 실정입니다.\n" +
    "\n" +
    "일차의료 만성질환 관리 시범사업은 동네의원 중심의 만성질환 관리 체계를 구축하여, \n" +
    "고혈압·당뇨병 환자가 동네의원에서 지속적이고 포괄적인 관리를 받을 수 있도록 지원합니다.\n" +
    "\n" +
    "참여 의원에서는 환자별 맞춤형 교육·상담을 제공하고, 질환 관리에 필요한 정보를 제공하여 자가관리를 지원합니다. \n" +
    "또한 환자의 생활습관 개선을 위한 교육과 상담도 함께 제공됩니다."

// 목업 데이터
const news = ref<NewsModel[]>([
  {
    id: 1, title: '만성질환 관리 사업 새 지침 발표', date: '2024-03-15',
    content: "건강보험심사평가원은 일차의료 만성질환 관리 시범사업의 새로운 운영 지침을 발표했습니다.",
  },
  {
    id: 2, title: '신청서, 보고서 양식 개정', date: '2024-03-10',
    content: "건강보험심사평가원은 일차의료 만성질환 관리 시범사업의 새로운 운영 지침을 발표했습니다.",

  },
  {
    id: 3, title: '환자 관리 성과 개선 사례', date: '2024-03-05',
    content: "건강보험심사평가원은 일차의료 만성질환 관리 시범사업의 새로운 운영 지침을 발표했습니다.",
  },
]);

const resources = ref<FileModel[]>([
  {id: 1, name: '프로그램 안내서', size: '2.4 MB'},
  {id: 2, name: '환자 정보 양식', size: '1.1 MB'},
  {id: 3, name: '의사용 매뉴얼', size: '1.8 MB'},
  {id: 4, name: '자주 묻는 질문', size: '2.4 MB'},
]);

// 다운로드 함수
const downloadResource = (resource: FileModel) => {
  alert(`${resource.name}을(를) 다운로드합니다.`);
};
</script>


<template>
  <div class="container">
    <!-- 파란색 배경 -->
    <div class="background"></div>

    <!-- 최대 너비 제한 -->
    <div class="content">
      <header class="header">
        <h1 class="text-h1 text-inverse text-center">일차의료 만성질환 관리사업</h1>
        <div class="mt-24"/>
        <p class="text-subtitle1 text-inverse text-center text-semi-bold">
          국민건강보험 일차의료 만성질환 관리 시범사업은 고혈압·당뇨병 환자에게<br>지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.
        </p>
      </header>
      <main class="main-content">
        <!--        일만사업 소개-->
        <section>
          <h3 class="text-h3 text-left">사업 소개</h3>
          <div class="mt-24"/>
          <p class="text-body2 text-tertiary">{{ introduction }}</p>
        </section>
        <!--        일만사업 관련 소식-->
        <section>
          <h3 class="text-h3 text-left">일만사업 관련 소식</h3>
          <div class="mt-24"/>
          <div class="news-list">
            <div class="news-item" v-for="article in news" :key="article.id">
              <span class="text-subtitle3"> {{ article.title }}</span>
              <div class="mt-2"/>
              <span class="text-caption2 text-tertiary">{{ article.date }}</span>
              <div class="mt-8"/>
              <p class="text-caption2 text-medium text-tertiary">{{ article.content }}</p>
            </div>
          </div>
        </section>
        <!--        일만사업 관련 자료-->
        <section>
          <h3 class="text-h3 text-left">일만사업 관련 자료</h3>
          <div class="mt-24"/>
          <div class="resource-list">
            <div class="resource-item" v-for="resource in resources" :key="resource.id">
              <div class="resource-desc-item">
                <span class="text-subtitle3"> {{ resource.name }}</span>
                <div class="mt-2"/>
                <p class="text-caption2 text-medium text-tertiary">{{ resource.size }}</p>
              </div>
              <div class="download-button" @click="downloadResource(resource)">
                <div class="center-row">
                  <img class="icon-download" src="/svgs/icons/icon-download-blue.svg" alt="다운로드 아이콘"/>
                  <div class="mr-8"/>
                  <span class="text-caption2 text-medium text-blue">다운로드</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>

.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

/* 파란색 배경 */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 524px;
  background-color: var(--color-bg-blue);
  z-index: -1; /* 배경이 다른 요소에 영향을 주지 않도록 설정 */
}

/* 카드 */
.content {
  position: relative;
  max-width: var(--desktop-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header {
  padding-top: 120px;
  padding-bottom: 80px;
}

.main-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  gap: 40px;
  padding-bottom: 120px;
}

section {
  padding: 40px;
}

.news-list {
  display: flex;
  gap: 16px;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
}

.news-item {
  border-radius: 16px;
  border: 1px solid var(--color-border-secondary, #DEDEDE);
  padding: 24px;
}

.resource-desc-item {
  display: flex;
  flex-direction: column;
}

.resource-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--color-border-secondary, #DEDEDE);
  padding: 24px;
}

.icon-download {
  width: 24px;
  height: 24px;
}

.download-button {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8, 8px);
  border-radius: 16px;
  background: var(--color-bg-blue-light, #EFF6FF);
  cursor: pointer;
}
</style>
