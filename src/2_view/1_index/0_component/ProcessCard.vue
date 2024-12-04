<script setup lang="ts">
import type {WorkProcessStepModel} from "~/src/0_models/WorkProcessStepModel";

const props = defineProps<{
  process: WorkProcessStepModel;
}>();

</script>

<template>
  <div class="container card">
    <div>
      <p class="text-subtitle1 text-left ">{{ props.process.title }}</p>
      <div class="mt-8 sm-mt-4"/>
      <p class="text-body2 text-tertiary text-left text-medium">{{ props.process.description }}</p>
    </div>
    <div class="mt-36 sm-mt-12"></div>
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
  .process-icon {
    width: 54px;
    height: 54px;
  }
}

</style>