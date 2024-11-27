<script setup lang="ts">
import type FAQModel from "~/models/FAQModel";
import ChevronDown from "~/components/0_components/icons/ChevronDown.vue";
import ChevronUp from "~/components/0_components/icons/ChevronUp.vue";

const faqList: FAQModel[] = [
  {
    question: "우리 의원도 설치 가능한가요?",
    answer: "네 아임파인 일만사업 솔루션은 일차병원에 적합하게 설계된 아임파인 닥터를 기반으로 합니다." +
        "따라서 일차병원이라면 누구나 아임파인 일만사업 솔루션을 설치하고 사용할 수 있습니다."
  },
  {
    question: "도입 비용은 얼마나 드나요?",
    answer: "최초 도입 비용은 아임파인 닥터의 요금제를 따르며 일차병원의 규모와 요구사항에 따라 다를 수 있습니다."
  },
  {
    question: "유지 비용도 있나요?",
    answer: "아임파인 일만사업은 건별 이용료로 부과되며 규모에 따라 수수료는 10~15%가 책정됩니다. 자세한 내용은 문의해주세요."
  },
  {
    question: "지속적인 지원도 받을 수 있나요?",
    answer: "네 아임파인 일만사업 솔루션은 카카오톡 채널이나 전화 등을 통해 지원받으실 수 있으며 빠른 문제 해결을 위해 최선을 다하겠습니다."
  }
]

const activeIndex = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}

</script>

<template>
  <div class="layout">
    <div class="content">
      <h2 class="text-h2 text-bold text-center spb-32">자주 묻는 질문</h2>
      <div
          v-for="(item, index) in faqList"
          :key="index"
          :class="['faq-item', { 'faq-selected-item': activeIndex === index }]"
      >
        <div class="question-container" @click="toggleFAQ(index)">
          <div class="question">
            <img class="faq-icon" alt="질문 아이콘" src="/svgs/icons/icon_question.svg"
                 width="24" height="24">
            <div class="spl-24 sm-spl-12"/>
            <p class="text-h5 text-semi-bold text-left padding-vertical-large">
              {{ item.question }}
            </p>
          </div>
          <ChevronDown
              v-if="activeIndex !== index"
              color="black"
              size="24"
          />
          <ChevronUp
              v-else
              color="var(--color-primary)"
              size="24"
          />
        </div>
        <div
            class="text-body1 text-medium padding-vertical-medium"
            v-if="activeIndex === index"
        >
          <div class="answer">
            <img class="faq-icon" alt="답변 아이콘" src="/svgs/icons/icon_answer.svg"
                 width="24" height="24">
            <div class="spl-24 sm-spl-12"/>
            <p class="text-body1 text-left text-tertiary line-height-24">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  padding-top: 128px;
  padding-bottom: 128px;

}

.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--desktop-max-width);
}

.faq-item {
  align-self: stretch;
}


.faq-selected-item {
  background: #FAFAFA;
}

.question-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 26px 48px;
}

.question-container:hover {
  background: var(--color-bg-primary-hover)
}

.question {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.answer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 26px 48px;
}

.faq-icon {
  width: 48px;
  height: 48px;
}

@media (max-width: 768px) {
  .sm-spl-12 {
    margin-left: 12px;
  }
  .faq-icon {
    width: 24px;
    height: 24px;
  }

  .faq-item {
    margin-inline: 16px;
  }

  .question-container {
    padding: 26px 12px;
  }

  .answer {
    padding: 26px 12px;
  }
}
</style>

