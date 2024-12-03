<script setup lang="ts">
import {ref, computed} from 'vue';
import AntSwitch from 'ant-design-vue/es/switch';
import AntSlider from 'ant-design-vue/es/slider';
import AntConfigProvider from 'ant-design-vue/es/config-provider';
import {useProfitCalculator} from "~/src/composables/useProfitCalculator";
import Badge from "~/src/2_view/0_components/badge/Badge.vue";
import {antdSwitchStyle, antdSliderStyle} from "~/src/2_view/0_components/antd-styles/antdStyles";

const useImFine = ref(true);
const onChangeImFine = () => {
  useImFine.value = !useImFine.value;
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
  // "초기평가": 0.96,
  // "계획수립": 0.8,
  // "점검평가료": 0.8,
  // "환자관리료": 4.8,
  // "교육상담료": 6,
  "초기평가": 0.48,
  "계획수립": 0.6,
  "점검평가료": 0.3,
  "환자관리료": 2.9,
  "교육상담료": 4,
}

const 회차_아임파인_사용시 = {
  "초기평가": 1,
  "계획수립": 2,
  "점검평가료": 1.6,
  "환자관리료": 9.6,
  "교육상담료": 8,
}

// 환자 수와 관련된 변수
const 환자수 = ref<number>(500);
const MIN_환자수 = 0;
const MAX_환자수 = 500;


// 계산 로직 사용
const {calculateProfit, calculateDiff, calculateTotalProfit, formatTotalProfit} =
    useProfitCalculator(환자수);

const 스스로한_경우_수익 = {
  초기평가: calculateProfit(가격["초기평가"], 회차_스스로["초기평가"]),
  계획수립: calculateProfit(가격["계획수립"], 회차_스스로["계획수립"]),
  점검평가료: calculateProfit(가격["점검평가료"], 회차_스스로["점검평가료"]),
  환자관리료: calculateProfit(가격["환자관리료"], 회차_스스로["환자관리료"]),
  교육상담료: calculateProfit(가격["교육상담료"], 회차_스스로["교육상담료"]),
}

const 아임파인_사용한_경우_수익 = {
  초기평가: calculateProfit(가격["초기평가"], 회차_아임파인_사용시["초기평가"]),
  계획수립: calculateProfit(가격["계획수립"], 회차_아임파인_사용시["계획수립"]),
  점검평가료: calculateProfit(가격["점검평가료"], 회차_아임파인_사용시["점검평가료"]),
  환자관리료: calculateProfit(가격["환자관리료"], 회차_아임파인_사용시["환자관리료"]),
  교육상담료: calculateProfit(가격["교육상담료"], 회차_아임파인_사용시["교육상담료"]),
}

// 아임파인 사용안할 시 손해 목록
const 손해목록 = {
  초기평가: calculateDiff(스스로한_경우_수익["초기평가"], 아임파인_사용한_경우_수익["초기평가"]),
  계획수립: calculateDiff(스스로한_경우_수익["계획수립"], 아임파인_사용한_경우_수익["계획수립"]),
  점검평가료: calculateDiff(스스로한_경우_수익["점검평가료"], 아임파인_사용한_경우_수익["점검평가료"]),
  환자관리료: calculateDiff(스스로한_경우_수익["환자관리료"], 아임파인_사용한_경우_수익["환자관리료"]),
  교육상담료: calculateDiff(스스로한_경우_수익["교육상담료"], 아임파인_사용한_경우_수익["교육상담료"]),
}


// 화면에 표시할 값

// 수익

const 표시되는_수익 = computed(() => {
  if (useImFine.value) {
    return 아임파인_사용한_경우_수익;
  } else {
    return 스스로한_경우_수익;
  }
});

// 총합 계산
const 총합 = () => {
  if (useImFine.value) {
    return calculateTotalProfit(아임파인_사용한_경우_수익);
  } else {
    return calculateTotalProfit(스스로한_경우_수익);
  }
};

const 총합_라운딩 = computed(() => {
  return formatTotalProfit(총합().value);
});

const 손해 = computed(() => {
  return calculateTotalProfit(아임파인_사용한_경우_수익).value - calculateTotalProfit(스스로한_경우_수익).value;
});

const badgeColorPreset = computed(() => {
  return useImFine.value ? 'blue' : 'red';
});

const 손해_절댓값 = (손해: number): number => {
  return Math.abs(손해);
}

const 손해_표시 = (손해: number): string => {
  return (useImFine.value ? '+' : '-') + 손해_절댓값(손해).toLocaleString() + '원';
}

</script>

<template>
  <div class="layout">
    <AntConfigProvider :theme="{
          components: {
          Slider: antdSliderStyle,
          Switch: antdSwitchStyle,
        },
      }"/>
    <div class="content">

      <div class="main-content">
        <p class="text-h1 text-center spb-64">예상 매출 계산</p>
        <div class="selector-container spb-24">
          <span class="text-body1 text-semi-bold ">아임파인과 함께</span>
          <AntSwitch :checked="useImFine" @click="onChangeImFine"/>
        </div>

        <p class="text-h2 text-bold text-center subtitle-summary"> {{ 총합_라운딩 }} </p>
        <div class="center-column text-h6 line-height-28 text-semi-bold spb-24">
          <p>아임파인을 사용하지 않는다면</p>
          <div class="row-start">
            <p class="text-red">{{ 손해.toLocaleString() }}원</p>
            <p> 손해</p>
          </div>
        </div>
        <div class="text-h5 text-semi-bold center-row spb-32">
          <p>만약 환자가 </p>
          <p class="text-blue">{{ 환자수 }}</p>
          <p>명이라면</p>
        </div>

        <div class="slide-container">
          <AntSlider v-model:value="환자수" :min="MIN_환자수" :max="MAX_환자수" :tooltipOpen=false :step=10></AntSlider>
        </div>
        <div class="profit-container">
          <div class="profit-item" v-for="(value, key) in 표시되는_수익" :key="key">
            <div class="row-space-between">
              <p class="text-body1 text-semi-bold">{{ key }}</p>
              <p class="text-body2 text-medium">{{ value.value.toLocaleString() }}원</p>
            </div>
            <Badge
                :key="badgeColorPreset + useImFine + 손해목록[key]"
                :class="['badge-item', {'badge-visible' : 손해목록[key].value != 0}]" :colorPreset='badgeColorPreset'
                :text="손해_표시(손해목록[key].value)"
                text-class="text-caption1 line-height-16"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.layout {
  display: flex;
  padding: var(--desktop-section-spacing) 0;
  width: 100%;
  justify-content: center; /* 자식 요소의 너비를 부모에 맞춤 */
  align-items: center; /* 자식 요소의 높이를 부모에 맞춤 */
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--profit-calculator-max-width);
}

.selector-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* 슬라이더 스타일 */

/* 슬라이더의 채워진 영역 (Track) */

.slide-container {
  margin-inline: 36px;
}

.profit-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 24px;
  border: solid 1px var(--color-border-primary);
  margin: 16px;
  padding: 36px;
  gap: 8px;
}

.profit-item {
  display: flex;
  flex-direction: column;
}

.badge-item {
  display: flex;
  width: fit-content;
  align-self: flex-end;
  justify-content: flex-end; /* Alignment.centerRight */
  align-items: center; /* 수직 중앙 정렬 */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.badge-visible {
  visibility: visible;
  opacity: 1;
}

.subtitle-summary {
  line-height: 64px;
}

@media (max-width: 768px) {
  .layout {
    padding: var(--mobile-section-spacing) 0;
  }

  .subtitle-summary {
    line-height: 48px;
  }
}
</style>
