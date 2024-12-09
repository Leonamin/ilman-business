<script setup lang="ts">
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

const labels: string[] = [
  '기존 진료 그대로',
  '설치 비용 무료',
  '전 과정 원격, 방문 지원',
  '중도 해지 수수료 0원',
]

const router = useRouter();

const handleApply = () => {
  router.push('/apply-form');
}
</script>

<template>
  <div class="banner-layout">
    <div class="content">
      <h2 class="text-h3 text-center">써보는게 제일 빠릅니다.</h2>
      <div class="mt-24 sm-mt-16"/>
      <div class="feature-container">
        <div v-for="(label, index) in labels" :key="index" class="feature">
          <img class="icon-check" src="/svgs/icons/icon-check-blue.svg" alt="icon-check"/>
          <div class="mr-4"/>
          <p class="text-body2 text-semi-bold">{{ label }}</p>
        </div>
      </div>
      <div class="mt-32 sm-mt-24"/>
      <SolidButton preset="blue" text="바로 도입하기" @click="handleApply"/>
    </div>
  </div>
</template>

<style scoped>
.banner-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: var(--desktop-section-spacing) 0;

  background-color: var(--color-bg-blue-light);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 16px;
  padding-block: 64px;
}

.feature-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 12px;
}

.feature {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.icon-check {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .feature-container {
    flex-direction: column;
    gap: 12px;
  }

  .content {
    padding-block: 40px;
  }
}

</style>