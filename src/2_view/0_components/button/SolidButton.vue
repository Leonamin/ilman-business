<template>
  <button
      :class="[buttonClass, { disabled }]"
      :style="{ borderRadius, width }"
      :disabled="disabled"
  >
    {{ text }}
  </button>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import {buttonClassMap, type ButtonPreset} from "~/src/style/button/ButtonColorPreset";

// Props 정의
const props = defineProps<{
  width?: string; // 버튼 너비
  preset: ButtonPreset; // primary 또는 secondary
  text: string; // 버튼 텍스트
  borderRadius?: string; // 테두리 둥글기 (기본값 제공 가능)
  disabled?: boolean; // 비활성화 여부
}>();

// 버튼 클래스 계산
const buttonClass = computed(() => buttonClassMap[props.preset]);

// 기본 border-radius 값 설정
const borderRadius = computed(() => props.borderRadius || '4px');

const width = computed(() => props.width || 'auto');
</script>


<style scoped>
/* 공통 버튼 스타일 */
button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

</style>
