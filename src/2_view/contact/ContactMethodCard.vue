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
      <p class="text-h5 text-semi-bold text-left spb-8 text-line-break text-line-height-small">
        {{ title }}</p>
      <p class="text-body1 text-medium text-left text-tertiary text-line-break text-line-height-small">
        {{ description }}</p>
    </div>
    <img src="/svgs/icons/icon_arrow_forward.svg" class="forward-icon">
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
  gap: 14px;
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