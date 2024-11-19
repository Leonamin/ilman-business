<template>
  <IndexHeader/>
  <div class="main-content">
    <h1>쉿! 원장님이 몰랐던 매출<br>아임파인이 찾아드릴게요!</h1>
    <div class="spacer16"></div>
    <h5>아임파인과 함께 일만사업에 참여하셔서 새로운 매출을 확인해보세요!</h5>
  </div>
</template>

<style scoped>

.main-content {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-content h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
}

.main-content h5 {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;
}

.spacer16 {
  height: 16px;
}


</style>


<script setup lang="ts">
import IndexHeader from "~/components/introduction/0_components/IndexHeader.vue";
</script>