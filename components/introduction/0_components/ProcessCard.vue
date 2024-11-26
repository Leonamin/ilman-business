<script setup lang="ts">
import type {WorkProcessStepModel} from "~/models/WorkProcessStepModel";

const props = defineProps<{
  process: WorkProcessStepModel;
}>();

</script>

<template>
  <div class="outer card">
    <div>
      <p class="text-h5 text-semi-bold text-left spb-small">{{ props.process.title }}</p>
      <p class="text-body1 text-medium text-left text-positive">{{ props.process.description }}</p>
    </div>
    <div class="spacer"></div>
    <div class="bottom">
      <div style="width:100px; height:100px; background-color: #cccccc">

      </div>
    </div>
<!--    image icon-->
  </div>

</template>

<style scoped>
.outer {
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
  padding: var(--spacing-32);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  aspect-ratio: 1.2;
}

.bottom {
  margin-left: auto
}
</style>