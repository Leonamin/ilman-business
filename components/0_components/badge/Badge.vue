<script setup lang="ts">
import {badgePresets, type BadgePreset} from "~/style/BadgePreset";

const props = defineProps<{
  preset: BadgePreset;
  text: string;
  borderRadius?: string;
  textClass?: string;
  padding?: string;
}>();

const badgeClass = badgePresets[props.preset];

</script>

<template>
  <p :class="['content', padding, textClass, badgeClass]">
    {{ text }}
  </p>
</template>

<style scoped>
.content {
  display: inline-block;
  width: max-content;
}

</style>