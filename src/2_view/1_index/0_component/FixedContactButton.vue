<script setup lang="ts">

// 상단으로 스크롤 이동
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";

const handleContact = () => {
  window.location.href = 'http://pf.kakao.com/_KmHpG';
};

const isMobile = ref(false);
onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });
  isMobile.value = window.innerWidth <= 768;
});

const computedStyle = computed(() => {
      if (isMobile.value) {
        return {
          padding: '12px 16px',
          iconSize: '24px',
          prefixIconPadding: '8px',
        }
      } else {
        return {
          padding: '16px 24px',
          iconSize: '36px',
          prefixIconPadding: '8px',
        }
      }
    }
)

</script>

<template>
  <div class="fixed-layout">

    <SolidButton
        preset="blue" text="문의하기" border-radius="100px" prefix-icon="/svgs/icons/icon-kakaotalk.svg"
        :prefix-icon-size=computedStyle.iconSize
        :padding=computedStyle.padding
        :prefix-icon-padding=computedStyle.prefixIconPadding
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