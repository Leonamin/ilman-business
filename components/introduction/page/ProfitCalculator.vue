<script setup lang="ts">
import { ref, computed } from 'vue';
import RowSheetTile from "~/components/introduction/0_components/RowSheetTile.vue";

// 가격 설정
const 가격_초기평가: number = 35060;
const 가격_계획수립: number = 27500;
const 가격_점검평가료: number = 27500;
const 가격_환자관리료_중위험군: number = 11660;
const 가격_교육상담료: number = 15330;

// 환자 수와 관련 변수
const 환자수 = ref(100);
const MIN_환자수 = 0;
const MAX_환자수 = 500;

// 수익 계산
const 수익_초기평가 = computed(() => 가격_초기평가 * 환자수.value);
const 수익_계획수립 = computed(() => 가격_계획수립 * 환자수.value);
const 수익_점검평가료 = computed(() => 가격_점검평가료 * 환자수.value);
const 수익_환자관리료_중위험군 = computed(() => 가격_환자관리료_중위험군 * 환자수.value);
const 수익_교육상담료 = computed(() => 가격_교육상담료 * 환자수.value);

// 총합 계산
const 총합 = computed(() =>
    수익_초기평가.value +
    수익_계획수립.value +
    수익_점검평가료.value +
    수익_환자관리료_중위험군.value +
    수익_교육상담료.value
);

// 환자 수 변경 이벤트 핸들러
const onChanged환자수 = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let value = parseInt(target.value);

  if (isNaN(value)) {
    value = MIN_환자수;
  }

  // min/max 범위 내로 조정
  환자수.value = Math.max(MIN_환자수, Math.min(value, MAX_환자수));
};
</script>

<template>
  <div>
    <h1>수익 계산기</h1>
    <div class="input-container">
      <p>만약 환자가</p>
      <input
          type="number"
          v-model="환자수"
          @input="onChanged환자수"
          :min="MIN_환자수"
          :max="MAX_환자수"
          placeholder="100"
      />
      <p>명이라면</p>
    </div>
    <ul>
      <li>
        <RowSheetTile label="초기 평가" :amount="수익_초기평가" />
      </li>
      <li>
        <RowSheetTile label="계획 수립" :amount="수익_계획수립" />
      </li>
      <li>
        <RowSheetTile label="점검 평가료" :amount="수익_점검평가료" />
      </li>
      <li>
        <RowSheetTile label="환자 관리료 (중위험군)" :amount="수익_환자관리료_중위험군" />
      </li>
      <li>
        <RowSheetTile label="교육 상담료" :amount="수익_교육상담료" />
      </li>
    </ul>
    <p>총합: {{ 총합 }}</p>
  </div>
</template>

<style scoped>
/* 입력 컨테이너 스타일 */
.input-container {
  display: flex;
  align-items: center;
}

.input-container input {
  width: 60px; /* 입력 필드 크기 조정 */
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  outline: none;
}

/* 입력 필드 포커스 스타일 */
.input-container input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* 스피너 제거 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 텍스트 스타일 조정 */
.input-container p:first-child {
  margin-right: 10px;
}

.input-container p:last-child {
  margin-left: 10px;
}

/* 리스트 스타일 */
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}
</style>
