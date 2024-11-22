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

const totalAmountStyle = computed(() => {
  return 총합.value < 0 ? "text-negative" : "text-positive";
});

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

</script>

<template>
  <div class="layout">
    <div class="main-content">
      <AnimatedElement>
        <div class="center-row">
          <h2>수익 계산기</h2>
        </div>
      </AnimatedElement>
      <div class="selector-container spb-large">
        <div class="center-row">
          <p class="text-body1 text-bold">원장님 </p>
          <p class="text-body1 text-bold text-negative">스스로</p>
        </div>
        <AntSwitch :checked="isImfine" @click="onChangeImfine"/>

        <div class="center-row">
          <p class="text-body1 text-bold">아임파인과 </p>
          <p class="text-body1 text-bold text-positive">함께</p>
        </div>
      </div>
      <div class="patient-block center-row spb-medium">
        <p class="text-body1 text-medium">만약 환자가 </p>
        <p class="text-body1 text-positive text-bold">{{ 환자수 }}</p>
        <p class="text-body1 text-medium">명이라면</p>
      </div>
      <div class="center-row">
        <p class="text-h5"> {{ 총합_라운딩 }} </p>
      </div>

      <div class="slide-container">
        <AntSlider v-model:value="환자수" :min="MIN_환자수" :max="MAX_환자수" :tooltipOpen=false :step=10></AntSlider>
      </div>
      <div class="profit-container">
        <ul>
          <li v-for="(value, key) in profits" :key="key">
            <RowSheetTile
                :label="value.label"
                :amount="value.amount"
                label-style="text-body2 "
                :amount-style="['text-body2', isImfine  ? 'text-positive' : 'text-negative']"
            />
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

.main-content h2 {
  font-size: var(--font-size-h2);
  font-weight: bold;
  margin-bottom: var(--padding-medium);
}

.patient-block {
  align-items: center;
  justify-content: center;
}

/* 슬라이더 스타일 */

.slide-container {
  width: 100%; /* Width of the outside container */
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

@media (max-width: 768px) {
  .main-content h2 {
    font-size: var(--font-size-h2-mobile);
  }
}
</style>
