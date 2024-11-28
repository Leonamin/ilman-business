<script setup lang="ts">

import ContactMethodCard from "~/src/2_view/contact/ContactMethodCard.vue";

const methods = [
  {
    title: '전화 문의',
    description: "02-6952-3078\n" + "(평일 오전 10시 ~ 오후 7시)",
    onClick: () => {
      window.location.href = 'tel:010-1234-5678';
    },
    imageSrc: '/svgs/icons/icon_human_question.svg',
  },
  {
    title: '도입 신청서 작성',
    description: '도입 신청서 양식을 작성하세요.',
    onClick: () => {
      window.location.href = '/apply-form';
    },
    imageSrc: '/svgs/icons/icon_file_folder.svg',
  },
  {
    title: '이메일 문의',
    description: '이메일로 문의하실 수 있습니다.\n' + 'contact@caresquare.kr',
    imageSrc: '/svgs/icons/icon_mail_open.svg',
    onClick: () => {
      window.location.href = 'mailto:contact@caresquare.kr';
    },
  }
]

const isMobile = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
  isMobile.value = window.innerWidth <= 768;
});

const description = () => {
  return isMobile.value ? '도입이나 문의를 희망하신다면\n아래의 창구를 통해 저희가 도움을 드리겠습니다.' :
      '도입이나 문의를 희망하신다면 아래의 창구를 통해 저희가 도움을 드리겠습니다.';
}
</script>

<template>
  <div class="layout">
    <div class="content">
      <div class="text-box">

        <p class="text-h1 text-center text-bold line-height-64 sm-text-h2 sm-text-semi-bold sm-line-height-34">
          아임파인 일만사업 솔루션에<br>관심을 가져주셔서 감사합니다
        </p>
        <div class="spb-24"/>
        <p class="text-h5 text-center text-semi-bold line-height-34 sm-line-height-24 text-line-break">
          {{ description() }}
        </p>
      </div>
      <div class="spb-64"/>
      <div class="contacts-container">
        <ContactMethodCard
            class="flex-equal" :title="method.title" :description="method.description" :image-src="method.imageSrc"
            @click="method.onClick" v-for="(method, index) in methods"
            :key="index"></ContactMethodCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  font-family: 'Noto Sans KR', sans-serif;
}

.content {
  display: flex;
  width: 100%;
  flex: 1;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  max-width: var(--desktop-max-width);

}

.text-box {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.contacts-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
}

.flex-equal {
  display: flex;
  flex: 1;
}

@media (max-width: 768px) {
  .content {
    padding: 128px 16px;
    width: auto;
  }

  .contacts-container {
    flex-direction: column;
  }

  .sm-text-h2 {
    font-size: 24px;
  }

  .sm-text-semi-bold {
    font-weight: 600;
  }

  .sm-line-height-34 {
    line-height: 34px;
  }

  .sm-line-height-24 {
    line-height: 24px;
  }
}

</style>