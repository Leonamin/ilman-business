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
    <div class="spacer"></div>
    <div class="faq">
      <h5>자주 묻는 질문</h5>
      <div
          v-for="(item, index) in faqList"
          :key="index"
          class="faq-item"
      >
        <div class="faq-header" @click="toggleFAQ(index)">
          <p class="question" :style="{
              color: activeIndex === index ? 'var(--color-primary)' : 'black'
            }">{{ item.question }}</p>
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
            class="answer"
            v-if="activeIndex === index"
        >
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
.layout {
  padding: 32px 0;
}

.faq {
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
}

.faq h5 {
  text-align: center;
  font-size: var(--font-size-h5);
  font-weight: bold;
  margin-bottom: 32px;
}

.question {
  font-size: 1.5rem;
  font-weight: bold;
}

.faq-item {
  border-bottom: 1px solid #ddd;
}

.faq-item:first-child {
  border-top: 1px solid #ddd;
}

.faq-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 8px;
  cursor: pointer;
}

.faq-header:hover {
  background: var(--color-bg-primary-hover)
}

.answer {
  font-size: 1rem;
  line-height: 1.6;
  padding-inline: 8px;
}

@media (max-width: 768px) {
  .faq {
    max-width: 100%;
  }

  .faq h5 {
    font-size: var(--font-size-h5-mobile);
  }

  .question {
    font-size: 1rem;
  }

  .answer {
    font-size: 0.875rem;
  }
}
</style>

