<script setup lang="ts">
import type {WorkProcessStepModel} from "~/src/0_models/WorkProcessStepModel";

const props = defineProps<{
  process: WorkProcessStepModel;
}>();

</script>

<template>
  <div class="container card">
    <div>
      <p class="text-h5 text-semi-bold text-left line-height-34 spb-8">{{ props.process.title }}</p>
      <p class="text-body1 text-medium text-left text-tertiary line-height-24">{{ props.process.description }}</p>
    </div>
    <div class="spacer"></div>
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
  gap: 16px;
}

.spacer {
  flex: 1;
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
</style>