<script setup lang="ts">
const methods = [
  {
    title: '전화 문의',
    description: '전화로 문의하실 수.',
    onClick: () => {
      window.location.href = 'tel:010-1234-5678';
    }
  },
  {
    title: '도입 신청서 작성',
    description: '도입 신청서 양식을 작성하세요.',
    onClick: () => {
      window.location.href = '/apply-form';
    }
  },
  {
    title: '이메일 문의',
    description: '이메일로 문의하실 수 있습니다.'
  }
]
</script>

<template>
  <div class="layout">
    <p class="title text-h1 text-center text-bold spv-xLarge text-line-height-medium">
      아임파인 일만사업에 관심을 가져주셔서 진심으로 감사드립니다!
    </p>
    <p class="text-h5 text-center text-bold">
      도입이나 문의를 희망하신다면 아래의 창구를 통해 저희가 도움을 드리겠습니다.
    </p>
    <div class="spb-xLarge">
    </div>
    <div class="contacts-container">
      <ContactMethodCard
          class="flex-equal" :title="method.title" :description="method.description"
          @click="method.onClick" v-for="(method, index) in methods"
          :key="index"></ContactMethodCard>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
  max-width: 70%;
  margin: 0 auto;
  padding: 0 1rem;
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
  .layout {
    max-width: 90%;
  }

  .contacts-container {
    flex-direction: column;
    gap: 16px;
  }
}

</style>