<script setup lang="ts">

import type {WorkProcessStepModel} from "~/src/0_models/WorkProcessStepModel";
import ChevronRight from "~/src/2_view/0_components/icons/ChevronRight.vue";
import ChevronDown from "~/src/2_view/0_components/icons/ChevronDown.vue";
import ChevronLeft from "~/src/2_view/0_components/icons/ChevronLeft.vue";
import ProcessCard from "~/src/2_view/introduction/0_components/ProcessCard.vue";

const process: WorkProcessStepModel[] = [
  {
    title: '환자 등록 관리',
    description: '아임파인이 8개의\n작업을 처리합니다.',
    imageSrc: '/svgs/icons/icon_monitor.svg'
  },
  {
    title: '진료',
    description: '아임파인이 6개의\n작업을 처리합니다.',
    imageSrc: '/svgs/icons/icon_medical_bag.svg'
  },
  {
    title: '포괄 평가',
    description: '아임파인이 4개의\n작업을 처리합니다.',
    imageSrc: '/svgs/icons/icon_book.svg'
  },
  {
    title: '교육 상담',
    description: '아임파인이 5개의\n작업을 처리합니다.',
    imageSrc: '/svgs/icons/icon_edu_hat.svg'
  },
  {
    title: '환자 관리',
    description: '아임파인이 모두\n처리합니다.',
    imageSrc: '/svgs/icons/icon_people.svg',
  },
  {
    title: '중간 점검',
    description: '아임파인이 5개의\n작업을 처리합니다.',
    imageSrc: '/svgs/icons/icon_monitor_log.svg',

  },
]

const isMobile = ref(false);

// 모바일 화면 768 픽셀 이하인 경우 이미지 변경
onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });

  isMobile.value = window.innerWidth <= 768;
});

</script>

<template>
  <div class="layout">
    <div class="content">

      <h2 class="text-h2 text-semi-bold center-row spb-32">아임파인의 일만사업 절차</h2>
      <div class="process-list" v-if="isMobile">
        <div class="center-column" v-for="(item, index) in process" :key="item.title">
          <ProcessCard :process="item"/>
          <div v-if="index !== process.length - 1" class="card-gap center-column">
            <ChevronDown color="black" size="24"/>
          </div>
        </div>
      </div>
      <div v-if="!isMobile">
        <div class="process-outer">
          <!--    첫번째 줄 1, 2, 3-->
          <div class="process-inner">
            <ProcessCard class="flex-equal" :process="process[0]"/>
            <div class="card-gap center-column">
              <ChevronRight color="black" size="24"/>
            </div>
            <ProcessCard class="flex-equal" :process="process[1]"/>
            <div class="card-gap center-column">
              <ChevronRight color="black" size="24"/>
            </div>
            <ProcessCard class="flex-equal" :process="process[2]"/>

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
            <ProcessCard class="flex-equal" :process="process[5]"/>
            <div class="card-gap center-column">
              <ChevronLeft color="black" size="24"/>
            </div>
            <ProcessCard class="flex-equal" :process="process[4]"/>
            <div class="card-gap center-column">
              <ChevronLeft color="black" size="24"/>
            </div>
            <ProcessCard class="flex-equal" :process="process[3]"/>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>


<style scoped>
.layout {
  display: flex;
  width: 100%;
  max-width: 100%;
  padding-top: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  max-width: var(--desktop-max-width);
}

.process-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding-inline: 16px;
}

.process-outer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

.card-gap {
  width: 54px;
  height: 54px;
}


@media (max-width: 768px) {
  .process-outer {
    padding-inline: var(--spacing-16);
  }

  .process-inner {
    flex-direction: column;
  }
}
</style>
