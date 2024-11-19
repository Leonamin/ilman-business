<script setup lang="ts">

</script>

<template>
  <header class="header-container">
    <img src="~/assets/svgs/shm_logo.svg">
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
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom:#cccccc solid 1px;
  width: 100%;
  height: var(--app-bar-height-desktop);
  background-color: var(--app-bar-background-color);
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
  color: var(--primary-color);
}

.header-nav-item a:visited {
  color: #1C1C1C;
}
</style>