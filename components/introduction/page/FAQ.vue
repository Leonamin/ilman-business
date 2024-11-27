<script setup lang="ts">
import type FAQModel from "~/models/FAQModel";
import ChevronDown from "~/components/0_components/icons/ChevronDown.vue";
import ChevronUp from "~/components/0_components/icons/ChevronUp.vue";

const faqList: FAQModel[] = [
  {
    question: "우리 의원도 설치 가능한가요?",
    answer: "아니요"
  },
  {
    question: "도입 비용은 얼마나 드나요?",
    answer: "100만원입니다."
  },
  {
    question: "유지 비용도 있나요?",
    answer: "네"
  },
  {
    question: "하면 뭐가 좋나요?",
    answer: "위에서 설명했을텐데"
  },
  {
    question: "지속적인 지원도 받을 수 있나요?",
    answer: "돈을 내신다면야."
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
  padding: 0 0 200px 0;
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
}
</style>

