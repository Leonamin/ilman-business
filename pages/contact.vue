<script setup lang="ts">
definePageMeta({
  title: '아임파인 일만사업 문의하기',
  meta: [
    {
      name: 'description',
      content: '아임파인 일만사업 솔루션에\n' +
          '관심을 가져주셔서 감사합니다\n' +
          '\n' +
          '도입이나 문의를 희망하신다면 아래의 창구를 통해 저희가 도움을 드리겠습니다.'
    }
  ]
});

useHead({
  title: '아임파인 일만사업 문의하기',
  meta: [
    {
      name: 'description',
      content: '아임파인 일만사업 솔루션에\n' +
          '관심을 가져주셔서 감사합니다\n' +
          '\n' +
          '도입이나 문의를 희망하신다면 아래의 창구를 통해 저희가 도움을 드리겠습니다.'
    }
  ]
});


import ContactMethodCard from "~/src/2_view/contact/ContactMethodCard.vue";

const router = useRouter();

const methods = [
  {
    title: '전화 문의',
    description: "02-6952-3079\n" + "(평일 오전 10시 ~ 오후 7시)",
    onClick: () => {
      window.location.href = 'tel:02-6952-3079';
    },
    imageSrc: '/svgs/icons/icon_human_question.svg',
  },
  {
    title: '도입 신청서 작성',
    description: '도입 신청서 양식을 작성하세요.',
    onClick: () => {
      router.push('/apply-form');
    },
    imageSrc: '/svgs/icons/icon_file_folder.svg',
  },
  {
    title: '카카오톡 문의',
    description: '카카오톡으로 문의하실 수 있습니다.\n' + '여기를 눌러 일만사업 채널 입장',
    imageSrc: '/svgs/icons/icon-kakaotalk.svg',
    onClick: () => {
      window.location.href = 'https://pf.kakao.com/_KmHpG';
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
        <p class="text-h2 text-center">
          아임파인 일만사업 솔루션에<br>관심을 가져주셔서 감사합니다
        </p>
        <div class="mt-32 sm-mt-16"/>
        <p class="text-body2 text-center text-semi-bold">
          {{ description() }}
        </p>
      </div>
      <div class="mt-64 sm-mt-32"/>
      <div class="contact-list">
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
  align-items: center;
  width: 100%;
  min-height: 100dvh;
}

.content {
  display: flex;
  width: 100%;
  flex: 1;
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

.contact-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  padding-inline: 16px;
}

.flex-equal {
  display: flex;
  flex: 1;
}

@media (max-width: 768px) {
  .content {
    padding: 60px 0;
  }

  .text-box {
    padding-inline: 16px;
  }

  .contact-list {
    flex-direction: column;
    padding-inline: 16px;
  }
}

</style>