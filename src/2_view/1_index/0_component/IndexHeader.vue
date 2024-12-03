<script setup lang="ts">

const navItem = {
  '소개 및 설명': '/#intro',
  // 설명: '/#explanation',
  // 혜택: '/#feature',
  '예상 매출 계산': '/#profit-calculator',
  '일만사업 절차': '/#process',
  '고객 성공 사례': '/#interview',
  FAQ: '/#faq',
}

</script>

<template>
  <div class="header">
    <header class="header-container">
      <div class="header-inner">
        <a class="clickable" href="/public">
          <div class="logo-row">
            <img class="logo-1" src="/svgs/logo.svg" alt="Logo 1">
            <img class="logo-2" src="~/assets/svgs/shm_black_logo.svg" alt="Logo 2">
          </div>
        </a>
        <nav class="center-row text-body1 text-semi-bold">
          <a v-for="(link, name) in navItem" :href="link" :key="name" class="header-nav-item clickable">{{ name }}</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--app-bar-height-desktop);
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-secondary);
  z-index: 4;
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--desktop-max-width);
  padding: 0 16px;
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.logo-1 {
  max-width: 58px;
}

.logo-2 {
  max-width: 167px;
}

.header-nav-item {
  margin: 24px;
}

.clickable:active {
  outline: solid 2px var(--color-text-secondary);
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.logo-1 {
  max-width: 58px;
}

.logo-2 {
  max-width: 167px;
}

.header-nav-item {
  margin: 24px;
}

.header-nav-item a {
  text-decoration: none;
}

.header-nav-item a:visited {
  color: #1C1C1C;
}

/* 모바일 화면 */
@media (max-width: 768px) {
  .header {
    height: var(--app-bar-height-mobile);
  }

  .header-inner {
    padding: 0 16px;
  }

  .header-nav-item {
    display: none; /* 향후 햄버거 메뉴 등으로 대체 가능 */
  }

  .logo-2 {
    max-width: 200px;
  }
}
</style>
