<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <p class="text-h1 spb-64 spt-16">
      아임파인 일만사업 솔루션 도입 신청서
    </p>
    <p class="text-h5 spb-32">
      * 인터넷 환경에 따라 신청서 양식을 불러오는 데 시간이 걸릴 수 있습니다.
    </p>
    <iframe class="airtable-embed" src="https://airtable.com/embed/apph5AtjI1HVpHTDc/pagz9sfMRBqDNyxhC/form"
            onmousewheel="" width="100%" height="533"
            style="background: transparent; border: 1px solid #ccc;">
    </iframe>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
  max-width: 70%;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .layout {
    max-width: 90%;
    padding-inline: var(--spacing-16);
  }
}
</style>