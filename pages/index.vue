<script setup lang="ts">
import Introduction from "~/src/2_view/1_index/1_section/1_IntroductionSection.vue";
import Feature from "~/src/2_view/1_index/1_section/3_FeatureSection.vue";
import WorkProcess from "~/src/2_view/1_index/1_section/5_WorkProcessSection.vue";
import FAQ from "~/src/2_view/1_index/1_section/8_FAQSection.vue";
import DoctorInterview from "~/src/2_view/1_index/1_section/6_DoctorInterviewSection.vue";
import ProfitCalculator from "~/src/2_view/1_index/1_section/4_ProfitCalculatorSection.vue";
import Explanation from "~/src/2_view/1_index/1_section/2_ExplanationSection.vue";
import FixedContactButton from "~/src/2_view/1_index/0_component/FixedContactButton.vue";
import AdvertisementBannerSection from "~/src/2_view/1_index/1_section/7_AdvertisementBannerSection.vue";
import type FAQModel from "~/src/0_models/FAQModel";

const seoMeta = {
  title: '만성질환관리사업 전문 | 아임파인 일만사업',
  description: '일차의료 만성질환관리사업의 정답, 아임파인 일만사업. 효율적인 만성질환관리로 진료는 그대로, 매출은 최대로. 고혈압, 당뇨병 등 만성질환 관리 플랫폼.',
  keywords: '만성질환관리사업, 만성질환관리, 일만사업, 심평원, 일차의료, 고혈압관리, 당뇨병관리, 당뇨병, 고혈압, 의원관리시스템, 아임파인'
};

const handleApplyForm = () => {
  //   #contact로 스크롤 이동
  router.push('/apply-form');
};

const faqList: FAQModel[] = [
  {
    question: "솔루션을 도입하고 싶어요. 무엇을 해야하나요?",
    answer: "네, 솔루션을 도입하기 위해서는 3가지 방식이 있습니다.\n" +
      "\n" +
      "1. 02-6952-3079 전화하기\n" +
      "  주중 오전 10시 - 오후 7시까지 상시 전화로 문의 가능합니다.\n" +
      "\n" +
      "2. 카카오톡 채널로 문의하기\n" +
      "  “아임파인 일만사업” 채널을 통해 메시지로 연락 주시거나, 채널 친구 추가 후 웰컴 메시지에 있는 “솔루션 도입문의”를 눌러 폼을 제출해주세요.\n" +
      "\n" +
      "3. 아래 “도입하기” 버튼을 눌러 도입 신청서를 제출해주세요.\n",
    additional: {
      text: "도입하기",
      onClick: () => {
        handleApplyForm();
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
    answer: "저희 솔루션을 사용하는 의원 중 30%는 케어코디네이터 없이 원장님 혼자 의원을 운영하고 계십니다.\n초기에는 환자 수가 적었더라도, 솔루션을 통해 꾸준히 등록 환자를 늘리며 안정적으로 운영하고 계십니다. 원장님 혼자서도 의원 운영이 충분히 가능하다는 점을 보여주는 사례입니다."
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

// FAQ 데이터를 위한 구조화된 데이터
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqList.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

useHead({
  title: seoMeta.title,
  meta: [
    {
      name: 'description',
      content: seoMeta.description,
    },
    {
      name: 'keywords',
      content: seoMeta.keywords
    },
    // Open Graph 태그 추가
    {
      property: 'og:title',
      content: seoMeta.title
    },
    {
      property: 'og:description',
      content: seoMeta.description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card 태그 추가
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: seoMeta.title
    },
    {
      name: 'twitter:description',
      content: seoMeta.description
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema)
    }
  ]
});


const isVisible = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;

  // 기기의 뷰포트 높이
  const viewportHeight = window.innerHeight;

  // 기기 높이의 2배 이상 스크롤하면 표시
  isVisible.value = scrollY > viewportHeight;
};

const router = useRouter();

const handleContact = () => {
  //   #contact로 스크롤 이동
  router.push('/contact');
};


</script>

<template>
  <div class="layout">
    <!-- 메인 컨텐츠 -->
    <main>
      <h1 class="sr-only">만성질환관리사업 전문 아임파인</h1>
      <Introduction id="intro" />
      <Explanation id="explanation" />
      <Feature id="feature" />
      <ProfitCalculator id="profit-calculator" />
      <WorkProcess id="process" />
      <DoctorInterview id="interview" />
      <AdvertisementBannerSection id="advertisement" />
      <FAQ id="faq" :faq-list="faqList" />
    </main>
    <!--    <ScrollToTopButton/>-->
    <!--    <div class="bottom-bar"-->
    <!--         :class="{ 'visible': isVisible }"-->
    <!--    >-->
    <!--      <span class="text">만성질환관리의 정답, 아임파인과 함께</span>-->
    <!--      <div class="button-container">-->
    <!--        <SolidButton preset="blue" text="일만사업 시작하기" @click="handleContact"/>-->
    <!--        <img-->
    <!--            class="cursor-image"-->
    <!--            src="/svgs/icons/icon-cursor-click-01.svg"-->
    <!--            alt="cursor"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </div>-->
    <FixedContactButton class="contact-button" :class="{ 'visible': true }" />
  </div>


</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.bottom-bar {
  position: fixed;
  bottom: 48px;
  /* 화면 아래에서 48px */
  left: 50%;
  background-color: #333;
  /* 바 배경색 */
  color: white;
  /* 텍스트 색상 */
  display: flex;
  align-items: center;
  padding: 12px 24px;
  /* 상하/좌우 패딩 */
  border-radius: 100px;
  /* 둥근 모서리 */
  z-index: 1000;
  /* 항상 위에 표시되도록 */
  opacity: 0;
  /* 초기 상태: 투명 */
  transform: translateX(-50%) translateY(20px);
  /* 아래쪽으로 약간 이동 */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.bottom-bar.visible {
  opacity: 1;
  /* 보이게 설정 */
  transform: translateX(-50%) translateY(0);
  /* 위치 이동 */
}

.text {
  margin-right: 16px;
  /* 버튼과 텍스트 간격 */
  font-size: 16px;
  font-weight: bold;
}

.button-container {
  position: relative;
  /* 버튼 위에 커서를 올리기 위한 기준 */
}

.button-container:hover .cursor-image {
  top: 16px;
  /* 버튼 위로 조금 띄움 */
  right: 45px;
  /* 버튼 오른쪽으로 위치 조정 */
  transform: scale(1.2);
  /* 커서 이미지 확대 */
}

.cursor-image {
  position: absolute;
  top: 0;
  /* 버튼 위로 조금 띄움 */
  right: -25px;
  /* 버튼 오른쪽으로 위치 조정 */
  width: 48px;
  /* 커서 이미지 크기 */
  height: 48px;
  pointer-events: none;
  /* 커서 이미지가 클릭을 방해하지 않도록 */
  transition: transform 0.3s ease 0s, top 0.3s ease 0s, right 0.3s ease 0s;
  /* 부드러운 전환 */
}

.contact-button {
  display: block;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-button.visible {
  opacity: 1;
  /* 보이게 설정 */
}

@media (max-width: 768px) {
  .bottom-bar {
    display: none;
  }

  .contact-button {
    display: block;
  }
}
</style>
