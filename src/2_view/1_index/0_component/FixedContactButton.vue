<script setup lang="ts">

// 상단으로 스크롤 이동
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

const router = useRouter();

const handleContact = () => {
  router.push('/contact');
};

</script>

<template>
  <div class="fixed-layout">

    <SolidButton
        preset="blue" text="문의하기" border-radius="100px" prefix-icon="/svgs/icons/icon-kakaotalk.svg"
        prefix-icon-size="24px"
        padding="12px 16px" prefix-icon-padding="8px"
        @click="handleContact"/>
  </div>

</template>

<style scoped>
.fixed-layout {
  position: fixed;
  bottom: 22px; /* 화면 하단으로부터 32px */
  right: 16px; /* 화면 오른쪽으로부터 32px */
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>