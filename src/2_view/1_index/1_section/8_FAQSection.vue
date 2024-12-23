<script setup lang="ts">
import type FAQModel from "~/src/0_models/FAQModel";
import ChevronDown from "~/src/2_view/0_components/icons/ChevronDown.vue";
import ChevronUp from "~/src/2_view/0_components/icons/ChevronUp.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";


defineProps<{
  faqList: FAQModel[];
}>();

const activeIndex = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}

const isMobile = ref(false);
onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
  isMobile.value = window.innerWidth <= 768;
});

const iconSizeChevron = computed(() => isMobile.value ? '24px' : '32px');

</script>

<template>
  <div class="layout">
    <div class="content">
      <h2 class="text-h2 text-center">자주 묻는 질문과 답변</h2>
      <div class="mt-64 sm-mt-36"/>
      <div
          v-for="(item, index) in faqList"
          :key="index"
          :class="['faq-item', { 'faq-selected-item': activeIndex === index }]"
      >
        <div class="question-container" @click="toggleFAQ(index)">
          <div class="question">
            <img class="faq-icon" alt="질문 아이콘" src="/svgs/icons/icon_question.svg">
            <div class="mr-24 sm-mr-12"/>
            <p class="text-question text-common">
              {{ item.question }}
            </p>
          </div>
          <div class="sp-icon-text"/>
          <ChevronDown
              v-if="activeIndex !== index"
              color="var(--color-text-secondary)"
              :size="iconSizeChevron"
          />
          <ChevronUp
              v-else
              color="var(--color-text-secondary)"
              :size="iconSizeChevron"
          />
        </div>
        <div v-if="activeIndex === index" class="answer-container">
          <img class="faq-icon" alt="답변 아이콘" src="/svgs/icons/icon_answer.svg">
          <div class="mr-24 sm-mr-12"/>
          <div>
            <p class="text-answer text-common">
              {{ item.answer }}
            </p>
            <div class="faq-additional spt-16" v-if="item.additional">
              <SolidButton preset="blue" :text="item.additional.text"
                           @click="item.additional.onClick"/>
            </div>
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
  padding: var(--desktop-section-spacing) 0;
  padding-bottom: 240px;
}

.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--desktop-max-width);
}

.title {
  margin-bottom: var(--title-spacing);
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

.answer-container {
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

.faq-additional {
  display: flex;
  align-self: flex-start;
}

.text-question {
  color: var(--color-text-secondary, #1C1C1C);
  text-align: start;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 141.667% */
}

.text-answer {
  color: var(--color-text-tertiary, #575757);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.sp-icon-text {
  margin-left: 24px;
}

@media (max-width: 768px) {
  .layout {
    padding: var(--mobile-section-spacing) 0;
    padding-bottom: 100px;
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

  .text-question {
    font-size: 16px;
    line-height: 24px;
  }

  .answer-container {
    padding: 26px 12px;
  }

  .text-answer {
    font-size: 14px;
    line-height: 20px;
  }

  .sp-icon-text {
    margin-left: 12px;
  }
}
</style>

