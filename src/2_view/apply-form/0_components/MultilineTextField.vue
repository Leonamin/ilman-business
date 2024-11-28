<script setup lang="ts">

const props = defineProps<{
  title: string;
  description: string;
  placeholder?: string;
  isRequired: boolean;
  modelValue: string;
  maxLength?: number;
  minLine?: number;
}>();

const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const hasDescription = computed(() => props.description.length > 0);

const maxLength = computed(() => props.maxLength || 1000);
const minLine = computed(() => props.minLine || 4);
</script>

<template>
  <div class="container">
    <!-- 타이틀과 중요 표시 -->
    <div class="row-start text-body1 text-bold text-semi-bold line-height-24 spb-4">
      <p>{{ title }}</p>
      <p v-if="isRequired" class="text-red">*</p>
    </div>

    <!-- 설명 -->
    <p v-if="hasDescription" class="text-body1 row-start text-tertiary line-height-20 spb-4">
      {{ description }}
    </p>

    <!-- Ant Input -->
    <a-textarea
        v-model:value="localValue"
        :placeholder="props.placeholder"
        :maxlength="maxLength"
        :rows="minLine"
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
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
