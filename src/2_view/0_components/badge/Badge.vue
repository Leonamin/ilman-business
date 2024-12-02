<script setup lang="ts">
import {
  badgeColorPresets,
  type BadgeColorPreset,
  type BadgeSizePreset,
  badgeSizePresets
} from "~/src/style/badge/BadgeColorPreset";

const props = defineProps<{
  colorPreset?: BadgeColorPreset;
  sizePreset?: BadgeSizePreset;
  text: string;
  borderRadius?: string;
  textClass?: string;
}>();

const badgeColor = badgeColorPresets[props.colorPreset || 'red'];
const badgeSize = badgeSizePresets[props.sizePreset || 'tiny'];
const computedStyle = computed(() => {
  return {
    borderRadius: props.borderRadius || '2px',
    textClass: props.textClass || '',
  }
});

</script>

<template>
  <p :class="['content', textClass, badgeColor, badgeSize]"
      :style="computedStyle">
    {{ text }}
  </p>
</template>

<style scoped>
.content {
  display: inline-block;
  width: max-content;
}

</style>