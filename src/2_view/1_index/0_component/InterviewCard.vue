<script setup lang="ts">
import type {InterviewModel} from "~/src/0_models/InterviewModel";
import {Direction} from "~/src/0_models/types/Direction";

const props = defineProps<{
  interview: InterviewModel
  direction?: Direction
}>()

const isMobile = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
  isMobile.value = window.innerWidth <= 768;
});

const directionClass = computed(() => {
  if (isMobile.value) {
    return 'column-start'
  }
  return props.direction === Direction.Left ? 'column-start' : 'column-end'
});

</script>

<template>
  <div class="card-layout">
    <div class="card-content" :class="directionClass">
      <div class="text-container">
        <div class="column-start text-common">
          <span class="text-subtitle2 text-primary">
            {{ props.interview.hospital }}
          </span>
          <div class="mt-16 sm-mt-8"/>
          <span class="text-h3 text-primary">
            {{ props.interview.title }}
          </span>
          <div class="mt-40 sm-mt-12"/>
          <p class="text-body1 text-tertiary">
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
.card-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  max-width: var(--desktop-max-width);
}

.card-content.column-start .text-container {
  order: 1;
}

.card-content.column-start .image-container {
  order: 2;
  padding-left: 54px;
}

.card-content.column-end .text-container {
  order: 2;
}

.card-content.column-end .image-container {
  order: 1;
  padding-right: 54px;
}

.text-container {
  flex: 0 0 50%;
}

.image-container {
  flex: 1;
}

.image-card {
  border-radius: 40px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .card-layout {
    flex-direction: column;
  }

  .card-content {
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 16px;
  }

  .card-content .text-container {
    order: unset;
  }
  .card-content .image-container {
    order: unset;
  }

  .card-content.column-start .image-container,
  .card-content.column-end .image-container {
    padding-inline: 0;
  }

  .text-container,
  .image-container {
    flex: 1;
  }
}
</style>