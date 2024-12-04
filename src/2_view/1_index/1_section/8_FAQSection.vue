<script setup lang="ts">
import type FAQModel from "~/src/0_models/FAQModel";
import ChevronDown from "~/src/2_view/0_components/icons/ChevronDown.vue";
import ChevronUp from "~/src/2_view/0_components/icons/ChevronUp.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

const router = useRouter();

const handleContact = () => {
//   #contact로 스크롤 이동
  router.push('/apply-form');
};


const faqList: FAQModel[] = [
  {
    question: "솔루션을 도입하고 싶어요. 무엇을 해야하나요?",
    answer: "네, 솔루션을 도입하기 위해서는 3가지 방식이 있습니다.\n" +
        "\n" +
        "1. 02-6952-3079 전화하기\n" +
        "\n" +
        "주중 오전 10시 - 오후 7시까지 상시 전화로 문의 가능합니다.\n" +
        "\n" +
        "2. 카카오톡 채널로 문의하기\n" +
        "\n" +
        "“아임파인 일만사업” 채널을 통해 메시지로 연락 주시거나, 채널 친구 추가 후 웰컴 메시지에 있는 “솔루션 도입문의”를 눌러 폼을 제출해주세요.\n" +
        "\n" +
        "3. 아래 “도입하기” 버튼을 눌러 폼을 제출해주세요.\n",
    additional: {
      text: "도입하기",
      onClick: () => {
        handleContact();
      }
    }
  },
  {
    question: "일차의료 만성질환관리사업은 모든 의원이 가능한가요?",
    answer: "네, 하지만 관리하는 고혈압과 당뇨병 환자가 충분한 경우에 일차의료 만성질환관리 사업에 참여하시는 것을 권유드립니다.\n" +
        "\n" +
        "저희 솔루션은 내과, 가정의학과에서 도입했을 때 그 효과가 가장 큽니다."
  },
  {
    question: "한 의원에서 최대 몇명의 환자를 등록할 수 있나요?",
    answer: "한 의원에서 최대 500명의 환자를 등록할 수 있습니다.\n" +
        "\n" +
        "저희 솔루션을 사용하며 원장님 혼자 500명을 관리하고 계시는 의원도 있습니다.\n" +
        "\n" +
        "솔루션에서는 어떤 환자를 등록하면 좋을지, 어떤 환자를 제외하면 좋을지를 알려줍니다. 이를 통해 효율적인 환자관리가 가능해지며, 안정적인 매출 확보를 기대할 수 있습니다.\n" +
        "\n" +
        "저희 솔루션을 도입하여 500명을 1년 관리했을 때 수수료 제외하고 1억 2천만원 정도의 매출을 기대할 수 있습니다."
  },
  {
    question: "솔루션 도입 이후, 의사로서 제가 해야할 일이 궁금합니다.",
    answer: "원장님께서 보다 손쉽게 환자의 동의를 얻을 수 있도록 도와드립니다. 환자 제공 팜플렛, 신규환자 설득방법 및 관리 노하우도 제공합니다. 카카오톡 채널을 통해 환자 관리 상황에 따른 질문과 해석, 처리 방법을 알려드립니다.\n" +
        "\n" +
        "만성질환관리 필수 교육을 이수하셔야 사업에 참여할 수 있습니다. 교육만 이수하시면 기관 등록 및 인력신고까지 도와드립니다."
  },
  {
    question: "저희 의원은 원장선생님이 1명(또는 2명 이상)이에요. 솔루션 사용이 가능할까요?",
    answer: "저희 솔루션을 사용하는 의원 중 30%는 케어코디네이터 없이 원장님 혼자 병원을 운영하고 계십니다.\n초기에는 환자 수가 적었더라도, 솔루션을 통해 꾸준히 등록 환자를 늘리며 안정적으로 운영하고 계십니다. 원장님 혼자서도 병원 운영이 충분히 가능하다는 점을 보여주는 사례입니다."
    + '\n\n' + "또한 저희 솔루션을 사용하는 의원 중 20%는 원장님이 2명 이상 근무하고 계십니다.\n이런 경우, 효율적인 정보 정리와 관리가 무엇보다 중요합니다. 아임파인을 통해 필수 업무를 손쉽게 관리하며, 여러 원장님이 함께 운영하는 의원에서도 체계적인 운영을 지원합니다."
  },
  {
    question: "저희 의원에는 이미 케어코디네이터가 있어요. 그럼에도 솔루션을 사용할 수 있나요?",
    answer: "네, 가능합니다.\n" +
        "\n" +
        "저희 솔루션을 사용하는 의원 중 12%는 케어코디네이터와 함께 활용하고 있습니다. 아임파인은 의사선생님과 케어코디네이터가 각각 해야 할 일을 명확히 구분하여 안내해 드리며, 효율적인 협업과 업무 분담을 통해 의원 운영을 더욱 체계적으로 지원합니다.",
  },
  {
    question: "케어코디네이터가 뭔가요?",
    answer: "만성질환 사업을 효과적으로 운영하기 위해서는 포괄적이고 지속적인 서비스 제공이 필수적입니다. 그러나 이를 의사 한 분이 모두 수행하기에는 시간과 비용 측면에서 큰 부담이 따릅니다. 이러한 문제를 해결하기 위해 케어코디네이터가 중요한 역할을 맡고 있습니다.\n" +
        "\n" +
        "케어코디네이터는 의원에 근무하며 만성질환자의 영양, 운동 등 자기관리 능력 강화를 위한 교육과 동기 부여를 지원합니다. 또한, 영양 평가 및 상담 등 관리 업무를 통해 환자들이 자신의 건강을 주도적으로 관리할 수 있도록 돕습니다.\n" +
        "\n" +
        "케어코디네이터 자격은 간호사 또는 영양사 자격을 보유한 전문가에게만 부여되며, 만성질환 관리의 질적 향상을 담당합니다."
  },
  {
    question: "케어코디네이터를 고용해서 솔루션을 사용하고 싶어요.",
    answer: "케어코디네이터는 의료기관에서 단독으로 고용 가능하며, 주 16시간 이상 근무가 필수입니다. 업무 시작 전에는 일차의료 만성질환 관리를 위한 기본교육을 최초 1회 이수해야 하며, 이후에는 매년 심화교육을 통해 역량을 지속적으로 강화해야 합니다.\n" +
        "\n" +
        "또한, 케어코디네이터를 고용하더라도 산정 인력에는 반드시 의사가 포함되어야 합니다.\n" +
        "\n" +
        "케어코디네이터가 해야 할 업무는 모두 아임파인에서 체계적으로 안내됩니다. 아임파인을 통해 환자 관리, 교육, 상담 등 업무를 손쉽게 파악하고 실행할 수 있어 의원 운영이 더욱 효율적이고 체계적으로 진행됩니다."
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

