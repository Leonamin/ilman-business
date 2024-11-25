<script setup lang="ts">

import type {FeatureModel} from "~/models/FeatureModel";

const props = defineProps<{
  feature: FeatureModel;
}>();

</script>

<template>
  <div class="card">
    <div>
      <p class="title text-semi-bold text-left spb-small text-line-break text-line-height-small">
        {{ props.feature.title }}</p>
      <p class="description text-medium text-left text-positive text-line-break text-line-height-small">
        {{ props.feature.description }}</p>
    </div>
    <div class="spacer"></div>
  </div>

</template>

<style scoped>
.spacer {
  flex: 1;
}

.card {
  padding: var(--padding-large);
  border-radius: 16px;
  aspect-ratio: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
  border: solid 1px var(--color-border-primary);
}

.bottom {
  margin-left: auto
}

.title {
  font-size: var(--font-size-h3);
  white-space: pre-line;
  word-break: keep-all;
  word-wrap: break-word;
  transition: visibility 0s, font-size 0.5s;
}

.description {
  opacity: 0;
  font-size: var(--font-size-body1);
  transition: opacity 0.5s;
}

.card:hover .title {
  font-size: var(--font-size-h5);
}

.card:hover .description {
  opacity: 1;
}
</style>