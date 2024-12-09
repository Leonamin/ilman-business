<template>
  <div
      :style="containerStyle"
      @focusin="isActive = true"
      @focusout="isActive = false"
  >
    <input
        v-model="localValue"
        :style="inputStyle"
        :placeholder="hintText"
        class="text-caption2 text-tertiary"
        :type="props.inputMode"
        :maxlength="props.maxLength"
        :inputmode="props.inputMode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  borderRadius: {
    type: String,
    default: "8px",
  },
  outlineColor: {
    type: String,
    default: "#DEDEDE",
  },
  activeColor: {
    type: String,
    default: "#3B82F6",
  },
  padding: {
    type: String,
    default: "10px",
  },
  hintText: {
    type: String,
    default: "",
  },
  textStyle: {
    type: Object,
    default: () => ({}),
  },
  hintTextStyle: {
    type: Object,
    default: () => ({
      color: "#999999", // 기본값: 회색
      fontSize: "14px",
    }),
  },
  maxWidth: {
    type: String,
    default: "none", // 기본값: 제한 없음
  },
  inputMode: {
    type: String,
    default: "text",
  },
  // 포맷하는 함수
  formatter: {
    type: Function,
    default: (value: string) => value,
  },
  maxLength: {
    type: Number,
    default: 100,
  }
});

const emit = defineEmits(["update:modelValue"]);

// 로컬 상태 관리
const localValue = ref(props.modelValue);
const isActive = ref(false);

const containerStyle = computed(() => ({
  border: `1px solid ${isActive.value ? props.activeColor : props.outlineColor}`,
  borderRadius: props.borderRadius,
  padding: props.padding,
  transition: "border-color 0.2s",
  width: "100%", // 최대 너비로 확장
  maxWidth: props.maxWidth, // 사용자 정의 max-width
}));

const inputStyle = computed(() => ({
  outline: "none",
  border: "none",
  width: "100%",
  backgroundColor: "transparent",
  ...props.textStyle,
}));

// 로컬 값이 변경될 때 포맷팅 적용
watch(localValue, (newValue) => {
  const formattedValue = props.formatter(newValue);
  if (formattedValue !== newValue) {
    localValue.value = formattedValue; // 포맷팅된 값을 로컬에 반영
  }
  emit("update:modelValue", formattedValue); // 부모 컴포넌트에 업데이트
});

// 부모에서 모델 값 변경 시 로컬 값 업데이트
watch(() => props.modelValue, (newValue) => {
  localValue.value = props.formatter(newValue);
});
</script>
