<template>
  <footer class="footer">
    <div class="content text-tertiary">
      <div class="footer-top">
        <div class="terms">
          <a class="text-body1 text-semi-bold" href="https://caresquare.notion.site/150a1c7601908099aba3c688b9235c17?pvs=4">개인정보처리방침</a>
          <span class="text-subtitle3 text-bold text-secondary">주식회사 케어스퀘어</span>
        </div>
        <div class="row-start text-line-break">
          <a class="text-body1 text-semi-bold" href="tel:02-6952-3078">문의하기 02-6952-3078</a>
          <div class="spl-24"/>
          <span class="text-body1 ">(평일 오전 10시 ~ 오후 7시)</span>
        </div>
      </div>
      <div class="footer-bottom text-body2 text-line-break ">
        <span>서울특별시 강남구 역삼로 156, 6층</span>
        <span>대표이사: 오병엽</span>
        <span>사업자번호:449-86-01362</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  align-self: center;
  justify-content: center;
}

.terms {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  width: 100%;
  max-width: var(--desktop-max-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 46px 0;
  gap: 32px;
}

.footer-top {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 768px) {
  .content {
    padding: 46px 16px;
  }
}

</style>
<script setup lang="ts">
</script>