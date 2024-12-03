<script setup lang="ts">
import type {WorkProcessStepModel} from "~/src/0_models/WorkProcessStepModel";

const props = defineProps<{
  process: WorkProcessStepModel;
}>();

</script>

<template>
  <div class="container card">
    <div>
      <p class="text-common card-title">{{ props.process.title }}</p>
      <div class="spb-8"/>
      <p class="text-common card-description">{{ props.process.description }}</p>
    </div>
    <div class="sp-content-icon"></div>
    <div class="bottom">
      <img class="process-icon" :src="process.imageSrc" alt="절차 이미지"/>
    </div>
    <!--    image icon-->
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.card-title {
  color: var(--color-text-secondary, #1C1C1C);

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 141.667% */
}

.card-description {
  color: var(--color-text-tertiary, #575757);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

.sp-content-icon {
  margin-top: 38px;
}

.card {
  padding: var(--spacing-36);
  background-color: #FAFAFA;
  border-radius: 16px;
  align-self: stretch;
}

.bottom {
  margin-left: auto
}

.process-icon {
  width: 64px;
  height: 64px;
}

@media (max-width: 768px) {
  .sp-content-icon {
    margin-top: 62px;
  }
}

</style>