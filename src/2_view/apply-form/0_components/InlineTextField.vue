<script setup lang="ts">

import OutlineInput from "~/src/2_view/0_components/input/OutlineInput.vue";

const props = defineProps<{
  title: string;
  description: string;
  placeholder?: string;
  isImportant: boolean;
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const hasDescription = computed(() => props.description.length > 0);
</script>

<template>
  <div class="container">
    <!-- 타이틀과 중요 표시 -->
    <div class="row-start text-body1 text-bold text-semi-bold">
      <p>{{ title }}</p>
      <p v-if="isImportant" class="text-red">*</p>
    </div>

    <!-- 설명 -->
    <p v-if="hasDescription" class="text-body1 row-start text-tertiary line-height-20">
      {{ description }}
    </p>

    <!-- Ant Input -->
    <OutlineInput
        v-model:value="localValue"
        :hintText="props.placeholder"
        input-style="text-body2"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 8px;
}
</style>
