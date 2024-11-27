<script setup lang="ts">
import type {InterviewModel} from "~/models/InterviewModel";
import {Direction} from "~/types/Direction";

const props = defineProps<{
  interview: InterviewModel
  direction?: Direction
}>()

const directionClass = props.direction === Direction.Left ? 'column-start' : 'column-end'

</script>

<template>
  <div class="layout">
    <div class="content"  :class="directionClass">
      <div class="text-container">
        <div class="column-start">
          <p class="text-h7 text-semi-bold line-height-28 spb-16">
            {{ props.interview.hospital }}
          </p>
          <p class="text-h3 text-semi-bold line-height-48 spb-40">
            {{ props.interview.title }}
          </p>
          <p class="text-h7 text-tertiary line-height-28">
            {{ props.interview.description }}
          </p>
        </div>
      </div>
      <div class="image-container">
        <img class="image-card" :src="props.interview.imageSrc" alt="interview"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  max-width: var(--desktop-max-width);
  gap: 54px;
}

.content.column-start .text-container {
  order: 1;
}

.content.column-start .image-container {
  order: 2;
}

.content.column-end .text-container {
  order: 2;
}

.content.column-end .image-container {
  order: 1;
}

.text-container {
  flex: 1.2;
}

.image-container {
  flex: 0.8;
}

.image-card {
  border-radius: 40px;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .content {
    flex-direction: column;
  }

}
</style>