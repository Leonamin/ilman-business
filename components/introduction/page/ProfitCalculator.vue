<script setup lang="ts">
import {ref, computed, reactive, watch, type Reactive} from 'vue';
import RowSheetTile from '~/components/introduction/0_components/RowSheetTile.vue';
import AnimatedElement from "~/components/0_components/animation/AnimatedElement.vue";
import AntSwitch from 'ant-design-vue/es/switch';
import AntSlider from 'ant-design-vue/es/slider';
import {useProfitCalculator} from "~/composables/useProfitCalculator";
import type {ProfitModel} from "~/types/profit";

const isImfine = ref(false);
const onChangeImfine = () => {
  isImfine.value = !isImfine.value;
  selected회차.value = isImfine.value ? 회차_아임파인_사용시 : 회차_스스로;
};

// 가격 설정
const 가격 = {
  초기평가: 35060,
  계획수립: 27500,
  점검평가료: 27500,
  환자관리료: 11660,
  교육상담료: 15330,
};

const 회차_스스로 = {
  "초기평가": 0.96,
  "계획수립": 0.8,
  "점검평가료": 0.8,
  "환자관리료": 4.8,
  "교육상담료": 6,
}

const 회차_아임파인_사용시 = {
  "초기평가": 1,
  "계획수립": 2,
  "점검평가료": 1.6,
  "환자관리료": 9.6,
  "교육상담료": 8,
}

const selected회차 = ref(회차_스스로);

// 환자 수와 관련된 변수
const 환자수 = ref<number>(100);
const MIN_환자수 = 0;
const MAX_환자수 = 500;


// 계산 로직 사용
const {calculateProfit, calculateTotalProfit, formatTotalProfit} =
    useProfitCalculator(가격, selected회차, 환자수);

const profits: Reactive<ProfitModel>[] = reactive([
  {label: "초기평가", amount: computed(() => calculateProfit("초기평가").value)},
  {label: "계획수립", amount: computed(() => calculateProfit("계획수립").value)},
  {label: "점검평가료", amount: computed(() => calculateProfit("점검평가료").value)},
  {label: "환자관리료", amount: computed(() => calculateProfit("환자관리료").value)},
  {label: "교육상담료", amount: computed(() => calculateProfit("교육상담료").value)},
]);

// 총합 계산
const 총합 = computed(() => {
  return calculateTotalProfit(profits).value;
});

const 총합_라운딩 = computed(() => {
  return formatTotalProfit(총합.value);
});

// 환자 수 변경 핸들러
const onChanged환자수 = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = parseInt(target.value);
  if (isNaN(value)) value = MIN_환자수;
  환자수.value = Math.max(MIN_환자수, Math.min(value, MAX_환자수));
};

watch(환자수, () =>
    console.log(`환자수 변경: ${환자수.value}`));

</script>

<template>
  <div class="layout">
    <div class="main-content">
      <AnimatedElement>
        <h1>수익 계산기</h1>
      </AnimatedElement>
      <div class="selector-container">
        <p>원장님 스스로</p>
        <AntSwitch :checked="isImfine" @click="onChangeImfine"/>
        <p>아임파인과 함께</p>
      </div>
      <div class="input-container">
        <p>만약 환자가</p>
        <p>{{ 환자수 }}</p>
        <p>명이라면</p>

      </div>
      <h1>{{ 총합_라운딩 }}</h1>

      <div class="slide-container">
        <AntSlider v-model:value="환자수" :min="MIN_환자수" :max="MAX_환자수" :tooltipOpen=false :step=10></AntSlider>
      </div>
      <div class="profit-container">
        <ul>
          <li v-for="(value, key) in profits" :key="key">
            <RowSheetTile :label="value.label" :amount="value.amount"/>
          </li>
        </ul>
      </div>

    </div>
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


.selector-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.main-content {
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
  -webkit-appearance: none; /* Override default CSS styles */
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
