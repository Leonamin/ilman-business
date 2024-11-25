<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="card outer">
    <div>
      <p class="text-h5 text-semi-bold text-left spb-small text-line-break text-line-height-small">
        {{ title }}</p>
      <p class="text-body1 text-medium text-left text-positive text-line-break text-line-height-small">
        {{ description }}</p>
    </div>
    <div class="bottom">
      <div style="width:100px; height:100px; background-color: #cccccc">
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: var(--padding-large);
  border-radius: 16px;
  border: 1px solid var(--color-border-primary);
  cursor: pointer;
}

.outer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.bottom {
  margin-top: auto;
  margin-left: auto;
}

.card:hover {
  background-color: var(--color-bg-secondary);
}

@media (max-width: 768px) {
  .bottom {
    display: none;
  }
}
</style>