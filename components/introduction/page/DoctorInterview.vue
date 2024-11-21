<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="main-content">
      <h2>고니를 아냐구요? 그는 제가 아는 최고의 땃쥐였어요</h2>
    </div>
  </div>
</template>

<style scoped>
.layout {
  padding: 32px 0;
}

.main-content {
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
}

.main-content h2 {
  text-align: center;
  font-size: var(--font-size-h2);
  font-weight: bold;
  margin-bottom: 32px;
}


@media (max-width: 768px) {
  .main-content h2 {
    font-size: var(--font-size-h2-mobile);
  }
}

</style>