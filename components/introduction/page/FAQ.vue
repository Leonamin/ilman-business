<script setup lang="ts">
import type FAQModel from "~/models/FAQModel";
import ChevronDown from "~/components/0_components/icons/ChevronDown.vue";
import ChevronUp from "~/components/0_components/icons/ChevronUp.vue";

const faqList: FAQModel[] = [
  {
    question: "우리 의원에 아임파인을 도입할 수 있을까요?",
    answer: "아니요"
  },
  {
    question: "도입 비용은 얼마나 드나요? 유지 비용은 별도로 발생하나요?",
    answer: "100만원입니다."
  },
  {
    question: "우리 의원에도 도입할 수 있는 규모일까요?",
    answer: "네"
  },
  {
    question: "도입 후에도 지속적인 지원을 받을 수 있을까요?",
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
          <h3 :style="{
              color: activeIndex === index ? 'var(--color-primary)' : 'black'
            }">{{ item.question }}</h3>
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
            class="faq-content"
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
  padding: 16px;
  cursor: pointer;
}

.faq-header:hover {
  background: var(--color-bg-primary-hover)
}

.faq-content {
  padding-inline: 16px;
  line-height: 1.6;
}

</style>

