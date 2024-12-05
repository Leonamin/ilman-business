// 인터페이스 정의

<script setup lang="ts">
import {ref} from 'vue';

import {type FileModel} from "~/src/0_models/FileModel.js";
import {type NewsModel} from "~/src/0_models/NewsModel.js";

definePageMeta({
  title: '일차의료 만성질환관리 사업 소개',
  meta: [
    {
      name: 'description',
      content: '일차의료 만성질환관리 사업이란?\n' +
          '국민건강보험 일차의료 만성질환관리 사업은 고혈압·당뇨병 환자에게 지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.'
    }
  ],
  layout: 'no-footer',
});

useHead({
  title: '일차의료 만성질환관리 사업 소개',
  meta: [
    {
      name: 'description',
      content: '일차의료 만성질환관리 사업이란?\n' +
          '국민건강보험 일차의료 만성질환관리 사업은 고혈압·당뇨병 환자에게 지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.'
    }
  ],
});

const introduction = "일차의료 만성질환관리 사업은 고혈압과 당뇨병 환자들에게 지속적이고 포괄적인 관리를 제공함으로써 치료 지속성을 높이고 질환의 악화를 방지하는 것을 목표로 하고 있습니다. 특히, 동네의원이 중심이 되어 환자별 맞춤형 연간 관리 계획을 수립하고, 의사와 케어코디네이터(간호사 또는 영양사)로 구성된 팀이 환자의 자기관리 능력을 강화할 수 있도록 지원합니다.\n" +
    "\n" +
    "일차의료 만성질환관리 사업에 참여하면 원장님은 ‘만성질환 통합관리료’를 통해 추가적인 수익을 창출할 수 있습니다. 예를 들어, 환자 1인당 연간 약 30만 원의 수가를 청구할 수 있으며, 500명의 환자를 관리할 경우 연간 약 1억 5,000만 원의 수익을 기대할 수 있습니다. 또한, 기존 본인부담률이 30%에서 20%로 낮아지고 건강생활실천지원금이 제공되기 때문에 환자의 만족도와 치료 지속성이 높아집니다.\n" +
    "\n" +
    "원장님의 주요 역할은 환자의 건강상태를 평가하고 개인별 맞춤형 관리 계획을 수립합니다. " +
    "이후 환자들에게 질환 관리에 대한 체계적인 교육과 상담을 제공합니다. " +
    "마지막으로 간호사와 영양사 등과 협력하여 팀 기반의 포괄적인 관리를 진행합니다.\n" +
    "\n" +
    "일만사업에 참여하신다면 원장님께서는 새로운 수익 창출의 기회가 되는 동시에, 환자의 건강을 증진시키고 의원의 진료 효율성을 높이는 데 기여할 수 있습니다."

// 목업 데이터
const news = ref<NewsModel[]>([
  {
    id: 1, title: '일차의료 만성질환관리 본사업 전환', date: '2024-09-29',
    content: "“가까운 동네의원에서 고혈압·당뇨병을 관리해 보세요” " +
        "환자 본인부담률 20% 적용 및 건강생활실천지원금 제공",
    link: "https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&act=view&list_no=1483237&tag=&nPage=1",
  },
  {
    id: 2, title: '9월 시작 ‘일차의료 만성질환 관리’ 본사업, 시범사업과 차이는?', date: '2024-08-29',
    content: "코디네이터 고용 의료기관 자율…1만2천 의원 참여 가능\n" +
        "배경책 건강정책국장, 전문기자협의회와 간담회서 밝혀\n" +
        "천식 등 호흡기질환 관리는 별도 시범사업 후 醫와 논의",
    link: "https://www.docdocdoc.co.kr/news/articleView.html?idxno=3020473",
  },
  {
    id: 3, title: '동네의원 만성질환 관리제 본사업 전환…통합관리료 신설', date: '2024-05-30',
    content: "시범사업 도입 4년여만…환자 한 명당 최고 약 8만원 \n" +
        "입덧 치료제 급여화…소아진료 네트워크 시범사업도 추진\n",
    link: "https://www.doctorsnews.co.kr/news/articleView.html?idxno=154894",
  },
]);

const resources = ref<FileModel[]>([
  {
    id: 1, name: '20240909요양기관대상 설명회 자료', size: '14.7 MB',
    link: 'https://ilman-file-storage.s3.ap-northeast-2.amazonaws.com/20240909%E1%84%8B%E1%85%AD%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%83%E1%85%A2%E1%84%89%E1%85%A1%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%AC+%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD.pdf',
  },
  {
    id: 2, name: '만성질환 통합관리 수가 안내 ', size: '5.3 MB',
    link: 'https://ilman-file-storage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB+%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5+%E1%84%89%E1%85%AE%E1%84%80%E1%85%A1+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2+.pdf',
  },
  {
    id: 3, name: '만성질환통합관리료질의응답', size: '678 KB',
    link: 'https://ilman-file-storage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%85%E1%85%AD%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B8.pdf'
  },
]);

// 다운로드 함수
const downloadResource = (resource: FileModel) => {
  if (resource.link) {
    window.open(resource.link, '_blank');
  }
};

const navigateToNews = (news: NewsModel) => {
  if (news.link) {
    window.open(news.link, '_blank');
  }
};
</script>


<template>
  <div class="container">
    <!-- 파란색 배경 -->
    <div class="background"></div>

    <!-- 최대 너비 제한 -->
    <div class="content">
      <header class="header">
        <h1 class="text-h1 text-inverse text-center desktop-visible">일차의료 만성질환관리 사업</h1>
        <h1 class="text-h1 text-inverse text-center mobile-visible">일차의료 만성질환<br>관리 사업</h1>

        <div class="mt-24"/>
        <p class="text-subtitle1 text-inverse text-center text-semi-bold">
          국민건강보험 일차의료 만성질환관리 사업은 고혈압·당뇨병 환자에게<br>지속적·포괄적 관리를 제공하여 치료 지속성 향상과 질환 악화 방지를 목표로 합니다.
        </p>
      </header>
      <main class="main-content">
        <!--        일만사업 소개-->
        <section>
          <h3 class="text-h3 text-left">사업 소개</h3>
          <div class="mt-24"/>
          <p class="text-body2 text-tertiary text-normal">{{ introduction }}</p>
        </section>
        <!--        일만사업 관련 소식-->
        <section>
          <h3 class="text-h3 text-left">일만사업 관련 소식</h3>
          <div class="mt-24"/>
          <div class="news-list">
            <div class="news-item" v-for="article in news" :key="article.id" @click="navigateToNews(article)">
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
                  <img class="icon-download" src="/svgs/icons/icon-view-blue.svg" alt="다운로드 아이콘"/>
                  <div class="mr-8"/>
                  <span class="text-caption2 text-medium text-blue">확인하기</span>
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
  flex: 1;
  border-radius: 16px;
  border: 1px solid var(--color-border-secondary, #DEDEDE);
  padding: 24px;
  cursor: pointer;
}

.news-item:hover {
  background-color: var(--color-bg-primary-hover);
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
  flex-shrink: 0; /* 버튼 크기가 줄어들지 않음 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  background: var(--color-bg-blue-light, #EFF6FF);
  cursor: pointer;
  width: auto; /* 버튼 크기 고정 */
}

@media (max-width: 768px) {
  .header {
    padding-inline: 16px;
    padding-top: 40px;
    padding-bottom: 32px;
  }

  .news-list {
    flex-direction: column;
  }

  .main-content {
    gap: 12px;
    padding-bottom: 0;
  }

  section {
    padding: 24px;
  }
}
</style>
