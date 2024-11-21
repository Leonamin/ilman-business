<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="main-content">
      <h2>우리는 이렇게 일합니다</h2>
      <h2 class="no-work">네 일을 안한다고 하는 군요 ㅠㅠ</h2>
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

.no-work {
  color:transparent;
}

.no-work:hover {
  color: red;
}


@media (max-width: 768px) {
  .main-content h2 {
    font-size: var(--font-size-h2-mobile);
  }
}


</style>