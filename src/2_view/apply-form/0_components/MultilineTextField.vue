<script setup lang="ts">
import ATextarea from "ant-design-vue/es/input/TextArea";

const props = defineProps<{
  title: string;
  description?: string;
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

const hasDescription = computed(() => props.description?.length !== undefined && props.description.length > 0);

const maxLength = computed(() => props.maxLength || 1000);
const minLine = computed(() => props.minLine || 4);
</script>

<template>
  <div class="container">
    <!-- 타이틀과 중요 표시 -->
    <div class="row-start text-body2 text-semi-bold">
      <p>{{ title }}</p>
      <p v-if="isRequired" class="text-blue">*</p>
    </div>
    <div class="mt-8"/>
    <!-- 설명 -->
    <p v-if="hasDescription" class="text-body1 row-start text-tertiary">
      {{ description }}
      <div class="mt-8"/>
    </p>
    <!-- Ant Input -->
    <ATextarea
        v-model:value="localValue"
        :placeholder="props.placeholder"
        :maxlength="maxLength"
        :rows="minLine"
        style="padding: 10px 12px"

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
}
</style>
