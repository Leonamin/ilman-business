<template>
  <div
      :style="containerStyle"
      @focusin="isActive = true"
      @focusout="isActive = false"
  >
    <input
        v-model="inputValue"
        :style="inputStyle"
        :placeholder="hintText"
        class="text-caption2 text-tertiary"
    />
  </div>
</template>

<script setup>
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
});

const emit = defineEmits(["update:modelValue"]);
const inputValue = ref(props.modelValue);
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

const hintStyle = computed(() => ({
  ...props.hintTextStyle,
}));

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});
</script>



<style scoped>
</style>
