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
  <div class="layout">
    <div class="content"  :class="directionClass">
      <div class="text-container">
        <div class="column-start">
          <span class="text-hospital gap-hos-title">
            {{ props.interview.hospital }}
          </span>
          <span class="text-title gap-title-desc">
            {{ props.interview.title }}
          </span>
          <p class="text-description">
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

}

.image-container {
}

.image-card {
  border-radius: 40px;
  object-fit: cover;
}

.text-hospital {
  align-self: stretch;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
}

.text-title {
  align-self: stretch;
  color: #000;
  /* heading/32 */
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px; /* 143.75% */
}

.text-description {
  align-self: stretch;
  color: var(--color-text-tertiary, #575757);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}

.gap-hos-title {
  margin-bottom: 16px;
}

.gap-title-desc {
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .content {
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
  }

  .content .text-container,
  .content .image-container {
    order: unset;
  }

  .text-container {
    padding-inline: 16px;
  }

  .image-container {
    padding-inline: 16px;
  }

  .text-hospital {
    font-size: 18px;
    line-height: 26px; /* 144.444% */
  }

  .text-title {
    font-size: 24px;
    line-height: 34px; /* 141.667% */
  }

  .text-description {
    font-size: 16px;
    line-height: 24px; /* 150% */
  }

  .gap-hos-title {
    margin-bottom: 12px;
  }

  .gap-title-desc {
    margin-bottom: 16px;
  }
}
</style>