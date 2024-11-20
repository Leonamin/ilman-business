<script setup lang="ts">
import {ref, computed, reactive, watch} from 'vue';
import gsap from 'gsap';
import RowSheetTile from '~/components/introduction/0_components/RowSheetTile.vue';

// 가격 설정
const 가격 = {
  초기평가: 35060,
  계획수립: 27500,
  점검평가료: 27500,
  환자관리료: 11660,
  교육상담료: 15330,
};

const 회차 = {
  "초기평가" : 1,
  "계획수립" : 2,
  "점검평가료" : 1.6,
  "환자관리료" : 9.6,
  "교육상담료" : 8,
}

// 환자 수와 관련된 변수
const 환자수 = ref(100);
const MIN_환자수 = 0;
const MAX_환자수 = 500;

const tween환자수 = reactive({number: 0});

// 환자 수 변경 시 애니메이션 처리
watch(환자수, (newValue) => {
  gsap.to(tween환자수, {duration: 1.0, number: newValue || MIN_환자수});
});

// 수익 계산
const 수익 = reactive({
  초기평가: computed(() => 가격.초기평가 * 회차.초기평가 * Math.round(tween환자수.number)),
  계획수립: computed(() => 가격.계획수립 * 회차.계획수립 *  Math.round(tween환자수.number)),
  점검평가료: computed(() => 가격.점검평가료 * 회차.점검평가료 * Math.round(tween환자수.number)),
  환자관리료: computed(() => 가격.환자관리료 * 회차.환자관리료 * Math.round(tween환자수.number)),
  교육상담료: computed(() => 가격.교육상담료 * 회차.교육상담료 * Math.round(tween환자수.number)),
});

const 총합 = computed(() =>
    Object.values(수익).reduce((total, value) => total + value, 0)
);

const 총합_라운딩 = computed(() => {
  const value = 총합.value;
  if (value >= 100000000) {
    // 1억 이상 -> 억 단위로
    const 억단위 = Math.floor(value / 100000000);
    const 억이하 = value % 100000000;
    return `약 ${억단위}억 ${Math.round(억이하 / 10000)}만원`;
  } else if (value >= 100000) {
    // 10만 이상 -> 10만 단위로
    return `약 ${(value / 10000).toFixed(0)}만원`;
  } else {
    // 10만 미만 -> 원 단위 그대로
    return `${value.toLocaleString()}원`;
  }
});

// 환자 수 변경 핸들러
const onChanged환자수 = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = parseInt(target.value);
  if (isNaN(value)) value = MIN_환자수;
  환자수.value = Math.max(MIN_환자수, Math.min(value, MAX_환자수));
};

onMounted(() => {
  gsap.to(tween환자수, {duration: 1.0, number: 환자수.value || MIN_환자수});
});

</script>

<template>
  <div class="layout">
    <div class="spacer"/>
    <div class="main-content">
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
      <div class="slide-container">
        <input class="slider" type="range" :min="MIN_환자수" :max="MAX_환자수" v-model="환자수">
      </div>
      <div class="profit-container">
        <ul>
          <li v-for="(value, key) in 수익" :key="key">
            <RowSheetTile :label="key" :amount="value"/>
          </li>
        </ul>
        <p>총합: {{ 총합_라운딩 }}</p>

      </div>

    </div>
    <div class="spacer"/>
  </div>
</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
}

.spacer {
  flex: 1;
}

.main-content {
  flex: 2;
  display: flex;
  flex-direction: column;
}

/* 입력 컨테이너 스타일 */
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: fit-content;
}

.input-container input {
  width: 60px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  outline: none;
}

.input-container input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-container p:first-child {
  margin-right: 10px;
}

.input-container p:last-child {
  margin-left: 10px;
}

/* 슬라이더 스타일 */

.slide-container {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.profit-container {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.profit-container ul {
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
}

.profit-container li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
