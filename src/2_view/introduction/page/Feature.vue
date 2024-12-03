<script setup lang="ts">
import AnimatedElement from "~/src/2_view/0_components/animation/AnimatedElement.vue";
import type {FeatureModel} from "~/src/0_models/FeatureModel";
import FeatureCard from "~/src/2_view/introduction/0_components/FeatureCard.vue";

const features: FeatureModel[] = [
  {
    title: "도입 단 한달부터\n상승하는 매출을 직접 확인하세요.",
    description: "일만사업에 참여하면 단 한달만에 상승하는 매출을 직접 확인할 수 있습니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 매출 상승을 위한 다양한 서비스를 제공합니다.",
    image: "/images/background/feature/image-feature-b1.png"
  },
  {
    title: "까다로운 환자관리\n저희가 전부 도와드리겠습니다.",
    description: "일만사업에 참여하면 까다로운 환자관리를 저희가 전부 도와드립니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 환자관리를 위한 다양한 서비스를 제공합니다.",
    image: "/images/background/feature/image-feature-b2.png"
  },
  {
    title: "필요한 자료\n저희는 이미 준비를 끝내놓았습니다.",
    description: "일만사업에 참여하면 필요한 자료를 저희가 이미 준비를 끝내놓았습니다.\n\n아임파인은 일만사업에 참여하는 병원들을 위해 필요한 자료를 제공합니다.",
    image: "/images/background/feature/image-feature-b3.png"
  }
];
</script>

<template>
  <div class="layout">
    <div class="content">
      <AnimatedElement>
        <h2 class="text-h2 text-semi-bold text-secondary text-center">아임파인으로<br>일만사업에 참여한다면?</h2>
        <div class="spt-64"></div>
      </AnimatedElement>
      <AnimatedElement :threshold=0.1>
        <div class="card-container">
          <FeatureCard
              class="card"
              :feature="feature" v-for="feature in features"
              :key="feature.title"
          />
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--desktop-max-width);
}

/* 일만사업 기능 스타일링 */
.card-container {
  display: grid;
  gap: var(--spacing-24);

  grid-template-columns: repeat(3, 1fr); /* 세 개의 열 */
  grid-auto-rows: 1fr; /* 모든 행 높이를 동일하게 */
  /* 부모 요소가 자식 크기에 맞게 확장되도록 */
  align-items: stretch;

  width: 100%;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    height: auto;
  }

  .content {
    padding: 0 var(--spacing-16);
  }

  .card-container {
    grid-template-columns: 1fr; /* 하나의 열 */
    grid-auto-rows: 1fr; /* 모든 행 높이를 동일하게 */
  }
}

</style>
