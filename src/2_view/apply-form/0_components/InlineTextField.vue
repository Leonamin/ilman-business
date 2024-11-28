<script setup lang="ts">
import AntInput from 'ant-design-vue/es/input';

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
    <div class="row-start text-body1 text-bold text-semi-bold line-height-24 spb-4">
      <p>{{ title }}</p>
      <p v-if="isImportant" class="text-red">*</p>
    </div>

    <!-- 설명 -->
    <p v-if="hasDescription" class="text-body1 row-start text-tertiary line-height-20 spb-4">
      {{ description }}
    </p>

    <!-- Ant Input -->
    <AntInput
        v-model:value="localValue"
        :placeholder="props.placeholder"
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
