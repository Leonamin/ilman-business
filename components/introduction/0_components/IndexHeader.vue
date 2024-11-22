<script setup lang="ts">

</script>

<template>
  <header class="header-container">
    <img class="logo" src="~/assets/svgs/shm_black_logo.svg">
    <div class="header-nav-item">
      <a href="#intro">소개</a>
      <a href="#feature">기능</a>
      <a href="#profit-calculator">매출 계산기</a>
      <a href="#work-process">워크 프로세스</a>
      <a href="#faq">FAQ</a>
    </div>
  </header>
</template>

<style scoped>
.logo {
  padding: 0 32px;
  max-width: 250px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:#cccccc solid 1px;
  width: 100%;
  height: var(--app-bar-height-desktop);
  color: var(--color-bg-primary);
}

.header-nav-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 32px;
}

.header-nav-item a {
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
  color: #1C1C1C;
}

.header-nav-item a:hover {
  color: var(--color-primary);
}

.header-nav-item a:visited {
  color: #1C1C1C;
}

@media (max-width: 768px) {
  .header-container {
    height: var(--app-bar-height-mobile);
  }
  .header-nav-item {
    display: none;
  }
  .logo {
    max-width: 200px;
  }
}
</style>