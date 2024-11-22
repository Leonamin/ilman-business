<script setup lang="ts">

import type {FeatureModel} from "~/models/FeatureModel";
import {type CardPreset, cardPresets} from "~/style/button/card/CardPreset";

const props = defineProps<{
  feature: FeatureModel;
  preset?: CardPreset;
}>();

const cssCardStyle = [
  'card',
  'outer'
]
const cardStyle = computed(() => cardPresets[props.preset || 'white']);

console.log(cardStyle.value)

</script>

<template>
  <div :class="[...cssCardStyle, cardStyle]">
    <div>
      <p class="text-h5 text-semi-bold text-left spb-small text-line-break text-line-height-small">
        {{ props.feature.title }}</p>
      <p class="text-body1 text-medium text-left text-positive text-line-break text-line-height-small">
        {{ props.feature.description }}</p>
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
  padding: var(--padding-large);
  border-radius: 16px;
  aspect-ratio: 1.2;
}

.bottom {
  margin-left: auto
}
</style>