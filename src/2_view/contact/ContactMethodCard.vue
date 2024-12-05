<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  imageSrc?: string;
}>();
</script>

<template>
  <div class="card container">
    <div>
      <p class="text-subtitle1">
        {{ title }}</p>
      <div class="mt-8"/>
      <p class="text-body2 text-medium text-tertiary">
        {{ description }}</p>
    </div>
    <div class="mt-16"/>
    <img src="/svgs/icons/icon_arrow_forward.svg" alt="들어가기 아이콘" class="forward-icon">
    <div class="bottom">
      <img class="bottom-icon" :src="imageSrc" alt="icon">
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: var(--spacing-32);
  border-radius: 16px;
  background-color: #FAFAFA;
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.bottom {
  margin-top: auto;
  margin-left: auto;
}

.card:hover {
  background-color: var(--color-bg-secondary);
}

.forward-icon {
  width: 24px;
  height: 24px;
}

.bottom-icon {
  width: 64px;
  height: 64px;
}

@media (max-width: 768px) {
}
</style>