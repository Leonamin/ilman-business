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
    <!--    타이틀-->
    <!--    설명-->
    <!--    인라인 입력 폼(의원명)-->
    <!--    인라인 입력 폼(지역명)-->
    <!--    인라인 입력 폼(성함)-->
    <!--    인라인 입력 폼(전화번호)-->
    <!--    인라인 입력 폼(사용중인 EMR)-->
    <!--    드랍 다운(옵션: 전화번호로 전화, 카카오톡)-->
    <!--    장문 입력 폼(궁금한 점)-->
    <!--    초기화 버튼-->
    <!--    제출 버튼-->
    <iframe class="airtable-embed" src="https://airtable.com/embed/appdx5BXToJFqzDNx/pagaXGdRp8K2RNQ3J/form"
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