<script setup lang="ts">
const props = defineProps<{
  label: string;
  amount: number;
}>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'}).format(price);
};
</script>

<template>
  <div class="layout">
    <p>{{ props.label }}</p>
    <p>{{ formatPrice(props.amount) }}</p>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
