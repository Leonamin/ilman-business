<script setup lang="ts">
const props = defineProps<{
  label: string;
  labelStyle?: string;
  amount: number;
  amountStyle?: string[];
}>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'}).format(price);
};
</script>

<template>
  <div class="layout spb-medium">
    <p :class="props.labelStyle">{{ props.label }}</p>
    <p :class="props.amountStyle">{{ formatPrice(props.amount) }}</p>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
