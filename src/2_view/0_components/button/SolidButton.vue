<script setup lang="ts">
import {computed} from 'vue';
import {buttonClassMap, type ButtonPreset} from "~/src/style/button/ButtonColorPreset";

// Props 정의
const props = defineProps<{
  width?: string; // 버튼 너비
  preset: ButtonPreset; // primary 또는 secondary
  text: string; // 버튼 텍스트
  borderRadius?: string; // 테두리 둥글기 (기본값 제공 가능)
  padding?: string; // 패딩
  disabled?: boolean; // 비활성화 여부
  prefixIcon?: string; // 버튼 앞에 아이콘
  prefixIconSize?: string; // 버튼 앞에 아이콘 크기
  prefixIconPadding?: string; // 버튼 앞에 아이콘 패딩
}>();

// 버튼 클래스 계산
const buttonClass = computed(() => buttonClassMap[props.preset]);

// 기본 border-radius 값 설정
const borderRadius = computed(() => props.borderRadius || '16px');

const padding = computed(() => props.padding || '16px 32px');

const width = computed(() => props.width || 'auto');

const hasPrefixIcon = computed(() => !!props.prefixIcon);
</script>

<template>
  <button
      :class="[buttonClass, { disabled }]"
      :style="{ borderRadius, width, padding }"
      :disabled="disabled"
  >
    <div class="container">
      <img v-if="hasPrefixIcon" :src="prefixIcon" alt="prefix"
           :style="{ width: prefixIconSize, 'padding-right': prefixIconPadding }"/>
      {{ text }}
    </div>
  </button>
</template>

<style scoped>
/* 공통 버튼 스타일 */
button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
