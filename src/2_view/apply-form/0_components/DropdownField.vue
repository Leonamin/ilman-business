<script setup lang="ts">
import {computed} from "vue";
import ChevronDown from "~/src/2_view/0_components/icons/ChevronDown.vue";
import AntDropDown from "ant-design-vue/es/dropdown";
import AntButton from "ant-design-vue/es/button";
import AntMenu from "ant-design-vue/es/menu";
const { Item: AMenuItem  } = AntMenu;

const props = defineProps<{
  modelValue: string;
  title: string;
  description: string;
  isRequired: boolean;
  options: string[];
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

// 설명 표시 여부 계산
const hasDescription = computed(() => props.description.length > 0);

// 연락수단 데이터
const 연락수단 = props.options;

// 선택된 값 처리
const handleSelect = (value: string) => {
  emit('update:modelValue', value); // 부모로 변경 이벤트 전달
};
</script>

<template>
  <div class="container">
    <!-- 타이틀과 중요 표시 -->
    <div class="row-start text-body2 text-semi-bold">
      <p>{{ title }}</p>
      <p v-if="isRequired" class="text-blue">*</p>
    </div>
    <!-- 설명 -->
    <p v-if="hasDescription" class="text-caption2 text-medium text-tertiary">
      {{ description }}
    </p>
    <!-- 드롭다운 -->
    <AntDropDown class="dropdown-container">
      <template #overlay>
        <AntMenu>
          <!-- 빈 문자열 처리 -->
          <a-menu-item v-for="수단 in 연락수단" :key="수단" @click="handleSelect(수단)">
            {{ 수단 }}
          </a-menu-item>
        </AntMenu>
      </template>
      <AntButton
          style="padding: 20px 12px">
        {{ props.modelValue || '선택' }}
        <ChevronDown color="black" size="20"/>
      </AntButton>
    </AntDropDown>
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

.dropdown-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
